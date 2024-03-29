const EventEmitter = require("events");
const MuteStream = require("mute-stream");
const readline = require("readline");
const { fromEvent } = require("rxjs");
const ansiEscapes = require("ansi-escapes");

const option = {
  type: "list",
  name: "name",
  message: "select your name:",
  choices: [
    { name: "zhangsan", value: "zs" },
    { name: "lisi", value: "ls" },
    { name: "wangwu", value: "ww" },
  ],
};

function Prompt(option) {
  return new Promise((resolve, reject) => {
    try {
      const list = new List(option);
      list.render();
      list.on("exit", function (answer) {
        resolve(answer);
      });
    } catch (error) {
      reject(error);
    }
  });
}

class List extends EventEmitter {
  constructor(option) {
    super();
    this.name = option.name;
    this.message = option.message;
    this.choices = option.choices;
    this.input = process.stdin;
    const ms = new MuteStream();
    ms.pipe(process.stdout);
    this.output = ms;
    this.rl = readline.createInterface({
      input: this.input,
      output: this.output,
    });
    this.selected = 0;
    this.height = 0;
    this.keypress = fromEvent(this.rl.input, "keypress").forEach(
      this.onkeypress
    );
  }

  onkeypress = (keymap) => {
    const key = keymap[1];
    if (key.name === "down") {
      this.selected++;
      if (this.selected > this.choices.length - 1) {
        this.selected = 0;
      }
      this.render();
    } else if (key.name === "up") {
      this.selected--;
      if (this.selected < 0) {
        this.selected = this.choices.length - 1;
      }
      this.render();
    } else if (key.name === "return") {
      this.haveSelected = true;
      this.render();
      this.close();
      this.emit("exit", this.choices[this.selected]);
    }
  };

  render() {
    this.output.unmute();
    this.clean();
    this.output.write(this.getContent());
    this.output.mute();
  }

  getContent = () => {
    if (!this.haveSelected) {
      let title = this.message + "(Use arrow keys)\n";
      this.choices.forEach((choice, index) => {
        if (index === this.selected) {
          if (index === this.choices.length - 1) {
            title += "\x1B[36m❯ " + choice.name + "\x1B[39m";
          } else {
            title += "\x1B[36m❯ " + choice.name + "\x1B[39m " + "\n";
          }
        } else {
          if (index === this.choices.length - 1) {
            title += "  " + choice.name;
          } else {
            title += "  " + choice.name + "\n";
          }
        }
      });
      this.height = this.choices.length + 1;
      return title;
    } else {
      const name = this.choices[this.selected].name;
      let title =
        "\x1B[32m?\x1B[39m \x1B[1m" +
        this.message +
        "\x1B[22m\x1B[0m \x1B[36m" +
        name +
        "\x1B[39m\x1B[0m \n";
      return title;
    }
  };

  clean() {
    const emptyLines = ansiEscapes.eraseLines(this.height);
    this.output.write(emptyLines);
  }

  close() {
    this.output.unmute();
    this.rl.output.end();
    this.rl.pause();
    this.rl.close();
  }
}

Prompt(option).then((answer) => {
  console.log("选择的是：", answer);
});
