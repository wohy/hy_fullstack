import { init, h } from 'snabbdom'

import style from 'sanbbdom/modules/style'
import eventlisteners from 'sanbbdom/modules/eventlistener'

let patch = init({
  style,
  eventlisteners
})

let vnode = h('div', {
  style: {
    backgroundColor: 'red'
  },
  on: {
    click: eventHandler
  }
}, [
  h('h1', 'hello snabbdom'),
  h('p', '这是p标签')
])


function eventHandler() {
  console.log('点击我了');
}

let app = document.querySelector('#app')

patch(app, vnode)