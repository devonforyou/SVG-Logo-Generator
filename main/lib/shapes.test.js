const { Circle, Square, Triangle } = require('./shapes');

describe('circle', () => {
    test('it should render a circle with the correct string and color', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />')
    })
});

describe('square', () => {
    test('it should render a square with the correct string and color', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<rect x="50" y="25" width="150" height="150" fill="blue" />')
    })
});

describe('triangle', () => {
    test('it should render a triangle with the correct string and color', () => {
        const shape = new Triangle();
        shape.setColor('green');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />')
    })
})