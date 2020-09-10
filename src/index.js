// import './index.css';

// const btn = document.createElement('button')
// btn.innerHTML = '点击'
// btn.onclick = function () {
//     const div = document.createElement('div')
//     div.innerHTML = 'item'
//     document.body.appendChild(div)
// }
// document.body.appendChild(btn)

import count from './count';
import number from './number';

count()
number()

if (module.hot) {
    module.hot.accept('./number', () => {
        number()
    })
}