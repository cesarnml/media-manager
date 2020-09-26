import { join } from 'lodash'
import './style.css'
import photo from './assets/img/photo.jpg'
import printMe from './print.js'

function component() {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  element.innerHTML = join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'Click me and check the console'
  btn.onclick = printMe

  // Add the image to our existing div
  const myPhoto = new Image()
  myPhoto.src = photo

  element.appendChild(myPhoto)
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
