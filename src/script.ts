import { Header, Main, Footer } from './App.js'

const elements = [
    new Header(),
    new Main(),
    new Footer(),
];

elements.forEach(element => {
    document.body.appendChild(element.element);
});