import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

function importScripts (src, options = {}) {
  const $el = document.createElement('script')
  $el.setAttribute('src', src)
  /* eslint guard-for-in: 0 */
  for (const opt in options) {
    $el.setAttribute(opt, options[opt])
  }
  document.body.append($el)
}

importScripts('https://kit.fontawesome.com/1af6662be3.js', {
  crossorigin: 'anonymous',
})

const mountNode = document.querySelector('#app')

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  mountNode
)
