import './style/index.less'

import GameControl from './moduls/GameControl';
const gc = new GameControl();
setInterval(() => {
    console.log(gc.direction);
}, 1000)