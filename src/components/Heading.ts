export default class Heading {
    element: HTMLElement;

    constructor(
        size: 1 | 2 | 3 | 4 | 5 | 6,
        text: string,
    ) {
        this.element = document.createElement(`h${size}`);
        this.element.innerHTML = text;
    }
}