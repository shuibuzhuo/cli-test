console.log('child process');
console.log('child pid: ', process.pid);

process.on('message', (msg) => {
  console.log('child receive message', msg);
})

process.send('hello from child')
