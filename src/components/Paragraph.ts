export default class Paragraph {
    element: HTMLElement;
    state: {
        text: string,
    };

    constructor(
        text: string,
    ) {
        this.state = {
            text: text
        }
        this.element = document.createElement('p');
        this.element.innerHTML = this.state.text;
    }
}