import Button from './_Button.js';

export default class ClickHoldTimer extends Button {
    state: {
        mousedown_time: number,
        mouseup_time: number,
        mousehold_duration: number,
        shortest_hold_duration: number,
        longest_hold_duration: number,
    } & typeof Button.prototype.state;

    constructor(name: string) {
        super(name);

        this.state = {
            ...super.state,
            label: 'Click and hold',
            mousedown_time: 0,
            mouseup_time: 0,
            mousehold_duration: 0,
            shortest_hold_duration: 0,
            longest_hold_duration: 0,
        };

        const restoreLabel = () => {
            const _shortest_hold_duration = this.state.shortest_hold_duration;
            const _longest_hold_duration = this.state.longest_hold_duration;
            const _mousehold_duration = this.state.mousehold_duration;

            let _restored_label: string;

            if (
                _mousehold_duration === _shortest_hold_duration &&
                _mousehold_duration === _longest_hold_duration
            ) {
                _restored_label = `Click-hold timer (${_mousehold_duration})`;
            } else {
                _restored_label = `Click-hold timer (${_shortest_hold_duration}, ${_longest_hold_duration})`;
            }

            this.state.label = _restored_label;
            this.element.setAttribute('value', _restored_label);
        }

        const setInitialHoldDuration = (duration: number) => {
            this.state.shortest_hold_duration = duration;
            this.state.longest_hold_duration = duration;

            const _label: string = `New hold set: ${duration}`;
            this.state.label = _label;
            this.element.setAttribute('value', _label);
            setTimeout(restoreLabel, this.config.timeout.restore_label);
        }

        const setShortestHoldDuration = (duration: number) => {
            this.state.shortest_hold_duration = duration;

            const _label: string = `New shortest hold: ${duration}`;
            this.state.label = _label;
            this.element.setAttribute('value', _label);
            setTimeout(restoreLabel, this.config.timeout.restore_label);

        }

        const setLongestHoldDuration = (duration: number) => {
            this.state.longest_hold_duration = duration;

            const _label: string = `New longest hold: ${duration}`;
            this.state.label = _label
            this.element.setAttribute('value', _label);
            setTimeout(restoreLabel, this.config.timeout.restore_label);
        }

        const handleMouseDown = (e: MouseEvent) => {
            this.state.mousedown_time = e.timeStamp;
        }

        const handleMouseUp = (e: MouseEvent) => {
            this.state.mouseup_time = e.timeStamp;

            const _mousedown_time = this.state.mousedown_time;
            const _mouseup_time = this.state.mouseup_time;            
            const _mousehold_duration = _mouseup_time - _mousedown_time;

            this.state.mousehold_duration = _mousehold_duration;

            const _shortest_hold_duration = this.state.shortest_hold_duration;
            const _longest_hold_duration = this.state.longest_hold_duration;

            switch (true) {
                case _shortest_hold_duration === 0 && _longest_hold_duration === 0:
                    setInitialHoldDuration(_mousehold_duration);
                    break;
                case _mousehold_duration < _shortest_hold_duration:
                    setShortestHoldDuration(_mousehold_duration);
                    break;
                case _mousehold_duration > _longest_hold_duration:
                    setLongestHoldDuration(_mousehold_duration);
                    break;
            }
        }

        this.element.setAttribute('value', this.state.label);

        this.element.addEventListener('mousedown', handleMouseDown);
        this.element.addEventListener('mouseup', handleMouseUp);
    }
}