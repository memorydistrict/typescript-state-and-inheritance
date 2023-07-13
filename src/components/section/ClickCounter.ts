import Section from './_Section.js';

import Break from '../Break.js';
import Heading from '../Heading.js';
import Paragraph from '../Paragraph.js';

import { ClickCounter as ClickCounterButton } from '../button/__export.js';

export default class ClickCounter extends Section {
    constructor(name: string) {
        super(name);

        const text_Heading = 'Click counter'
        const text_Paragraph = 'Inheritting (`extending`) from the `Button` class, the <strong>`ClickCounter`</strong> is a button which, when clicked, iterates the `count` state value and updates the button\'s label';

        const elements = [
            new Heading(2, text_Heading),
            new Paragraph(text_Paragraph),
            new Break(1),
            new ClickCounterButton('counter_button'),
        ]

        elements.forEach(element => {
            this.element.appendChild(element.element);
        });
    }
}