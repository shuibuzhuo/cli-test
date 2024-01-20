import path from 'path'
import { exists } from './utils'

console.log(path.resolve('.'));
console.log(exists(path.resolve('.')));

(async() => {
  const res = await new Promise(resolve => setTimeout(() => resolve('haha'), 1000))
  console.log('res ok', res);
})()
