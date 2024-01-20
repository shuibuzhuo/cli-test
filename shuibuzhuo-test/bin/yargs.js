#!/usr/bin/env node

const yargs = require("yargs/yargs");
const dedent = require("dedent");
const pkg = require("../package.json");

const argv = process.argv.slice(2);
const cli = yargs();

const context = {
  shuibuzhuoVersion: pkg.version,
};

cli
  .usage("Usage: shuibuzhuo-test [command] <options>")
  .demandCommand(
    1,
    "A command is required. Pass --help to see all available commands and options."
  )
  .strict()
  .recommendCommands()
  .fail((err, msg) => {
    console.log(err);
  })
  .alias("h", "help")
  .alias("v", "version")
  .wrap(cli.terminalWidth())
  .epilogue(
    dedent`
  When a command fails, all logs are written to lerna-debug.log in the current working directory.

  For more information, check out the docs at https://lerna.js.org/docs/introduction
`
  )
  .options({
    debug: {
      type: "boolean",
      describe: "Bootstrap debug mode",
      alias: "d",
    },
  })
  .option("registry", {
    type: "string",
    describe: "Define global registry",
    alias: "r",
  })
  .group(["debug"], "Dev Options:")
  .group(["registry"], "Extra Options:")
  .command(
    "init [name]",
    "Do init a project",
    (yargs) => {
      yargs.option("name", {
        type: "string",
        describe: "Name of a project",
        alias: "n",
      });
    },
    (argv) => {
      console.log("argv", argv);
    }
  )
  .command({
    command: "list",
    alias: ["ls", "la", "ll"],
    describe: "List local packages",
    builder: (yargs) => {},
    handler: (argv) => {
      console.log("argv", argv);
    },
  })
  .parse(argv, context);
