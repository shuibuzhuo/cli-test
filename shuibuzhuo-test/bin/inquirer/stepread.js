function stepRead(callback) {
  function onkeypress(s) {
    output.write(s)
    line += s
    switch(s) {
      case '\r':
        input.pause() // 将输入流终端下来
        callback(line)
        break
    }
  }

  const input = process.stdin // 输入流
  const output = process.stdout // 输出流
  let line = ''

  emitKeypressEvents(input)
  // 监听输入了某个字符
  input.on('keypress', onkeypress)

  input.setRawMode(true) // 开启原始模式，所有字符的特殊处理被禁用，比如回车，ctrl + c
}

function emitKeypressEvents(stream) {
  function onData(chunk) {
    g.next(chunk.toString())
  }

  const g = emitKeys(stream)
  g.next()

  // 输入流监听用户输入，即等待用户输入信息
  stream.on('data', onData)
}

function* emitKeys(stream) {
  while(true) {
    let ch = yield
    stream.emit('keypress', ch)
  }
}

stepRead((s) => {
  console.log('answer:' + s);
})
