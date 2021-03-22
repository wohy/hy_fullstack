import style from './index.css'
import imgSrc from '@/assets/img.jpeg'

function comp() {
  const el = document.createElement('div')
  el.innerHTML = '<i>你好，黄老板</i>'
  console.log([1, 2, 3].findIndex(x => x === 4));
  return el
}

document.body.appendChild(comp())