const { Circle, Triangle, Square } = require('./shapes');

describe('circle', () => {
    it('should render a circle', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    })
})

describe('triangle', () => {
    it('should render a triangle', () => {
        const shape = new Triangle();
        shape.setColor('pink')
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="pink" />')
    })
})

describe('square', () => {
    it('should render a square', () => {
        const shape = new Square();
        shape.setColor('toupe')
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="toupe" />')
    })
})

