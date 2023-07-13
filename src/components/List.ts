export default class List {
    element: HTMLElement;

    constructor(
        list_items: string[],
        unordered?: boolean,
        reversed?: boolean
    ) {
        if (
            !unordered ||
            unordered === undefined
        ) {
            this.element = document.createElement('ol');
        } else {
            this.element = document.createElement('ul');
        }

        list_items.forEach(item => {
            const _item = document.createElement('li');
            _item.innerText = item;
            this.element.appendChild(_item);
        });
    }
}