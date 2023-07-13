import Section from './_Section.js';

import Break from '../Break.js';
import Heading from '../Heading.js';
import HorizontalLine from '../HorizontalLine.js';
import Paragraph from '../Paragraph.js';

export default class Footer extends Section {
    constructor(
        name: string,
    ) {
        super(
            name,
        );

        const textParagraph = '<a href=\'https://github.com/memorydistrict/\'>memorydistrict</a>';

        const _HorizontalLine = new HorizontalLine().element;

        const _Paragraph = new Paragraph(textParagraph).element;

        this.element.append(
            _HorizontalLine,
            _Paragraph,
        );
    }
}