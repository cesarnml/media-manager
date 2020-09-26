import { join } from 'lodash'
import './style.css'
import photo from './assets/img/photo.jpg'

function component() {
  const element = document.createElement('div')

  element.innerHTML = join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  // Add the image to our existing div
  const myPhoto = new Image()
  myPhoto.src = photo

  element.appendChild(myPhoto)

  return element
}

document.body.appendChild(component())
