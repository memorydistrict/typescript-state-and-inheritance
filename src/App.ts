import * as Section from './components/section/__export.js';

import Break from './components/Break.js';
import HorizontalLine from './components/HorizontalLine.js';

export class Header {
    element: HTMLElement;

    constructor() {
        this.element = document.createElement('header');

        const elements = [
            new Section.About('about'),
            new HorizontalLine,
        ];

        elements.forEach(element => {
            this.element.appendChild(element.element);
        });
    }
}

export class Main {
    element: HTMLElement;

    constructor() {
        this.element = document.createElement('main');

        const elements = [
            new Section.ClickCounter('counter'),
            new Break(1),
            new HorizontalLine,
            new Section.DoubleClickCounter('doubleclick'),
            new Break(1),
            new HorizontalLine,
            new Section.ClickHoldTimer('holdtimer'),
        ];

        elements.forEach(element => {
            this.element.appendChild(element.element);
        });
    }
}

export class Footer {
    element: HTMLElement;

    constructor() {
        this.element = document.createElement('footer');

        const elements = [
            new Break(1),
            new Section.Footer('footer'),
        ];

        elements.forEach(element => {
            this.element.appendChild(element.element);
        });
    }
}