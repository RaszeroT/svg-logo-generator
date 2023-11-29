const { Circle, Triangle, Square } = require('../js/shapes');

describe('circle', () => {
    it('should render a circle', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="129" cy="68" r="60" fill="blue" />')
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
        shape.setColor('taupe')
        expect(shape.render()).toEqual('<rect x="35" y="" width="190" height="190" fill="taupe" />')
    })
})

