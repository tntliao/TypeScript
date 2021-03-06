export default class Snake {
    // 蛇容器
    element: HTMLElement;
    // 蛇头
    head: HTMLElement;
    // 蛇身
    boodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.boodies = this.element.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        this.head.style.left = value + 'px';
    }

    set Y(value: number) {
        this.head.style.top = value + 'px';
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", '<div></div>')
    }
}