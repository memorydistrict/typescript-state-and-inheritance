import Section from './_Section.js';

import Heading from '../Heading.js';
import Paragraph from '../Paragraph.js';

export default class About extends Section {
    constructor(name: string) {
        super(name);

        const textHeading = 'TypeScript Inheritance and State Management Demonstration';
        const textParagraph = 'The following is a demonstration of inheritance and state management in TypeScript, using classes (as available within the ES6 standard).';

        const elements = [
            new Heading(1, textHeading),
            new Paragraph(textParagraph),
        ];

        elements.forEach(element => {
            this.element.appendChild(element.element);
        });
    }
}