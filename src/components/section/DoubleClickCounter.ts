import Section from './_Section.js';

import Break from '../Break.js';
import Heading from '../Heading.js';
import List from '../List.js';
import Paragraph from '../Paragraph.js';

import { DoubleClickCounter as DoubleClickCounterButton } from '../button/__export.js';

export default class DoubleClickCounter extends Section {
    constructor(name: string) {
        super(name);

        const text_Heading = 'Double-click counter';
        const text_Paragraph = 'Like the <i>click counter</i> button, the <strong>double-click counter</strong> inherits from the <i>Button</i> class. However, the double-click counter works as so:';

        const list_Steps = [
            'When the page loads, the button has a state value of `0` for the last click, and a set timeout value (in milliseconds), before which the next click must be completed.',
            'On each click, the button will store last click\'s timestamp value, this click\'s timestamp, and the click difference (the timestamp of the recent click, subtracted by the timestamp of the last click); all of which is measured in milliseconds).',
            'If the click difference is less than or equal to the timeout value; then the event listener of the button is briefly disabled over a set timeout period, as the counter iterates and button displays a confirmation message, before returning to its previous state'
        ];

        const elements = [
            new Heading(2, text_Heading),
            new Paragraph(text_Paragraph),
            new List(list_Steps),
            new Break(1),
            new DoubleClickCounterButton('doubleclick_button'),
        ];

        elements.forEach(element => {
            this.element.appendChild(element.element);
        });
    }
}