export default class Break {
    element: HTMLElement;

    constructor(
        amount: number,
    ) {
        const _break = document.createElement('div');

        for (let i = 0; i < amount; i++) {
            const _br = document.createElement('br');
            _break.appendChild(_br);
        }

        this.element = _break;
    }
}