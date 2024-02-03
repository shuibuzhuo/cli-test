const path = require("path");
const ejs = require("ejs");

const html = "<div><%= user.name %></div>";
const options = {};
const data = {
  user: {
    name: "hamo123",
  },
};
const data2 = {
  user: {
    name: "zhangsan123",
  },
};

// 返回 compiled function，用于解析 html 中的 ejs 模板
const template = ejs.compile(html, options);
const compiledTemplate = template(data);
const compiledTemplate2 = template(data2);
console.log(compiledTemplate);
console.log(compiledTemplate2);

// 第二种用法
const renderedTemplate = ejs.render(html, data, options);
console.log(renderedTemplate);

// 第三种用法
// 3.1 Promise
const renderedFile = ejs.renderFile(
  path.resolve(__dirname, "template.html"),
  data,
  options
);
renderedFile.then((file) => console.log(file));
renderedFile.then(console.log);

// 3.2 callback
ejs.renderFile(
  path.resolve(__dirname, "template.html"),
  data,
  options,
  (err, file) => {
    console.log(file);
  }
);