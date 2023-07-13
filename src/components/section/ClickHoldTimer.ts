import Section from './_Section.js';

import Break from '../Break.js';
import Heading from '../Heading.js';
import List from '../List.js';
import Paragraph from '../Paragraph.js';

import { ClickHoldTimer as ClickHoldTimerButton } from '../button/__export.js';

export default class ClickHoldTimer extends Section {
    constructor(name: string) {
        super(name);

        const text_Heading = 'Click-hold timer'
        const text_Paragraph = 'Much like the <i>click counter</i> and <i>double-click counter</i> buttons, the <strong>click-hold timer</strong> inherits from the <i>Button</i>. Additionally, like the <i>double-click counter</i> there is some further functionality to this button:';

        const list_Steps = [
            'When the page loads, the button has initialized state values of `0` across the mouse-down and mouse-up timestamp (monitored by their respective event listeners), the mouse-hold duration, the shortest hold duration and the longest hold duration.',
            'When a mouse-down input (click start) is detected on the button, the mouse-down timestamp is updated to the time of the mouse-down event.',
            'When the mouse-up input (click end) is detected, the mouse-up timestamp is updated to the time of the mouse-up event.',
            'The mouse-hold duration is calculated by subtracting the mouse-down timestamp from the mouse-up timestamp, and the state value is updated with the result.',
            'If both the shortest and longest hold duration state values are `0`, they are both updated to match the recently updated mouse-hold value. A brief confirmation message is shown in the button, before the button\'s label is updated to reflect the initial hold time',
            'If not, and the mouse-hold duration is shorter than the shortest hold duration, the shortest hold duration is updated to match the recently updated mouse-hold value. A brief confirmation message is shown in the button, before the button\'s label is updated to reflect the newly updated shortest hold duration, and the longest hold duration',
            'If not, and the mouse-hold duration is longer than the longest hold duration, the longest hold duration is updated to match the recently updated mouse-hold value. A brief confirmation message is shown in the button, before the button\'s label is updated to reflect the shortest hold duration, and the newly updated longest hold duration',
            'Otherwise, neither value is updated.'
        ]

        const elements = [
            new Heading(2, text_Heading),
            new Paragraph(text_Paragraph),
            new List(list_Steps),
            new Break(1),
            new ClickHoldTimerButton('holdtimer_button'),
        ];

        elements.forEach(element => {
            this.element.appendChild(element.element);
        });
    }
}