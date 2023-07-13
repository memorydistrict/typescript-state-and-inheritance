import Button from './_Button.js';

//  The `extends` keyword is used to specify the base class from which the sub-class will inherit
export default class DoubleClickCounter extends Button {
    //  Inheriting sub-classes that require to call from the constructor of the base `Button` class, will need to use the `super` keyword.
    //  Additionally, a spread operator `...` is used to spread the `state` property of the `Button` class into the `state` property of the `DoubleClickCounter` class; allowing for the `state` property of the `DoubleClickCounter` class to be a combination of the `state` property of the `Button` class and the `count` property of the `DoubleClickCounter` class.
    state = {
        ...super.state,
        count: 0,
        last_click: 0,
    }

    constructor(name: string) {
        //  Inheriting sub-classes that require to call from the constructor of the base `Button` class, will need to use the `super` keyword
        super(name);

        this.state = {
            ...super.state,
            label: 'Double-click counter',
            count: 0,
            last_click: 0
        };

        const timeout_DoubleClick = this.config.timeout.double_click;
        const timeout_RestoreLabel = 500;

        const restoreLabel = () => {
            const _count = this.state.count;
            let _label: string;

            if (_count === 0) {
                _label = 'Double-click counter';
            } else if (_count === 1) {
                _label = `Double-click counter (${_count})`;
            } else {
                _label = `Double-click counter (${_count})`;
            }

            this.state.label = _label;
            this.element.setAttribute('value', _label);
            
            this.element.addEventListener('click', handleDoubleClick);
        }

        const setCounter = () => {
            this.element.removeEventListener('click', handleDoubleClick);

            this.state.count += 1;

            let _label: string = 'Double-clicked!';
            this.state.label = _label;
            this.element.setAttribute('value', _label);

            setTimeout(restoreLabel, timeout_RestoreLabel);
        }

        const handleDoubleClick = (e: MouseEvent) => {
            const _last_click = this.state.last_click;
            const _this_click = e.timeStamp;
            const _click_difference = _this_click - _last_click;

            this.state.last_click = _this_click;

            if (_click_difference <= timeout_DoubleClick) {
                setCounter();
            }
        }

        this.element.setAttribute('value', this.state.label);

        this.element.addEventListener('click', handleDoubleClick);
    }
}