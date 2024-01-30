const cp = require('child_process')
const path = require('path')

// cp.exec('ls -al|grep node_modules', function(err, stdout, stderr) {
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
// })

cp.execFile('cmd', ['/c', path.resolve(__dirname, 'test.shell')], function(err, stdout, stderr) {
  console.log(err);
  console.log(stdout);
  console.log(stderr);
})

// const child = cp.spawn('npm.cmd', ['install'], {
//   cwd: path.resolve('E:/vue/cli-test/shuibuzhuo-test-lib')
// })

// child.stdout.on('data', function(chunk) {
//   console.log('stdout', chunk.toString());
// })

// child.stderr.on('data', function(chunk) {
//   console.log('stderr', chunk.toString());
// })

// cp.exec('npm install', {
//   cwd: path.resolve('E:/vue/cli-test/shuibuzhuo-test-lib')
// }, function(err, stdout, stderr) {
//   console.log(err);
//   console.log(stdout);
//   console.log(stderr);
// })

// const child = cp.fork(path.resolve(__dirname, 'child.js'))
// child.send('hello from main')
// child.on('message', (msg) => {
//   console.log('main receive message', msg);
// })
// console.log('main pid: ', process.pid);
