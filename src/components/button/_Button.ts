//  In compliance with the ES6 standard, the `export` keyword is used to export declarations, such as classes, functions, and variables from a module so that they can be used by other programs with the `import` keyword. The `default` keyword allows the exported declaration to be imported without having to specify a name for it.
//  All base classes are prefaced with the `abstract` keyword. An `abstract` base class cannot be instantiated directly, which is the preferred option, as we'll rather be instantiating sub-classes built from the `Button` class.
export default abstract class Button {
    //  The `protected` keyword allows the property to be accessible by any inheriting sub-classes, while restricting access from any code outside of the `Button` class hierarchy.
    //  The `readonly` keyword makes the property immutable, meaning that it cannot be modified after it has been initialized.
    //  Properties can be defined with or without pre-determined values. In this case, a timeout value for double-clicks has been defined.
    protected readonly config = {
        timeout: {
            double_click: 300,
            restore_label: 1000
        }
    };
    //  The `public` keyword makes the property accessible from any code outside of the `Button` class hierarchy.
    public state: { label: string };
    element: HTMLElement;

    //  The `constructor` method is a special method for creating and initializing an object created with a class. All properties and functions executed within the `constructor` method will be executed when the class is instantiated. In the case for this class, the `constructor` method is used to initialize the `state` and `element` properties.
    constructor (name: string) {
        //  As properties and methods can differ between instantiated classes, the `this` keyword is used to refer to the current instance of the class.
        this.state = { label: name };

        this.element = document.createElement('input');

        const attributes = [
            'type', 'button',
            'id', name,
            'name', name,
        ];

        for (let i: number = 0; i < attributes.length; i += 2) {
            this.element.setAttribute(
                attributes[i],
                attributes[i+1],
            );
        }
    }
    //  Any functions defined outside of the `constructor` method, will be defined as a prototype function of the class. This is reserved for functions that do not affect instantiated class properties.
}