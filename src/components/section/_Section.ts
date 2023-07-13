export default abstract class Section {
    element: HTMLElement;

    constructor (name: string) {
        this.element = document.createElement('section');

        const attributes = [
            'id', name,
            'name', name,
        ];

        for (let i: number = 0; i < attributes.length; i += 2) {
            this.element.setAttribute(
                attributes[i],
                attributes[i+1],
            )
        }
    }
}