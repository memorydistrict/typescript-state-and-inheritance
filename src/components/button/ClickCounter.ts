//  To import the default export from a module, the `import` keyword is used
import Button from './_Button.js';

//  The `extends` keyword is used to specify the base class from which the sub-class will inherit.
export default class ClickCounter extends Button {
    //  The `state` property, in this case, is a combination of  the `count` property of the `ClickCounter` class and the `state` property of the `Button` class.
    //  The `typeof` keyword is used to get the type of a variable, in this case, the `state` property of the `Button` class. This is required to ensure that the `state` property of the `ClickCounter` class is compatible with the `state` property of the `Button` class.
    //  The `prototype` keyword is used to get the prototype (i.e. the `state` property containing the `label`) of the `Button` class.
    state: { count: number }
        & typeof Button.prototype.state;

    constructor (name: string) {
        //  Inheriting sub-classes that require to call from the constructor of the base `Button` class, will need to use the `super` keyword.
        super(name);

        //  The `state` property of the `ClickCounter` class is a combination of the `count` property of the `ClickCounter` class and the `state` property of the `Button` class.
        //  In the parent `Button` class, the `state` property has the `public` access modifier and not `protected`. While `protected` properties can be accessed from sub-classes (eg. the `config` property), the `ClickCounter` class is spreading `...` the `state` property of the `Button` class into the `state` property of the `ClickCounter` class, which is not applicable in `protected` properties.
        this.state = {
            ...super.state,
            label: 'Click counter',
            count: 0,
        };

        //  The `handleClick` function is defined within the constructor of the `ClickCounter` class, as the function affects instantiated properties of the `ClickCounter` class. If you were to define this function outside of the constructor, the `handleClick` function would not be able to access the instantiated properties of the `ClickCounter` class.
        const handleClick = () => {
            this.state.count += 1;
            const _click_count = this.state.count;

            if (_click_count === 0) {
                this.state.label = `Click counter`;
            } else {
                this.state.label = `Click counter (${_click_count})`;
            }

            this.element.setAttribute('value', this.state.label);
        }

        this.element.setAttribute('value', this.state.label);

        this.element.addEventListener('click', handleClick);
    }
}