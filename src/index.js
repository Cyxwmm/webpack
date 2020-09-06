import avatar from './avatar.jpg'
import createAvatar from './avatar';
import style from './index.scss';

console.log(avatar)

var img = new Image()
img.src = avatar;
img.classList.add(style.avatar)

var root = document.getElementById('root')
root.appendChild(img)

createAvatar()
// const div = document.createElement('div')
// div.classList.add('test')
// root.appendChild(div)
