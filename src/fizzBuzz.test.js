const {fizzBuzz} = require('./fizzBuzz')

describe('fizzBuzz', () => {
    test('Should returns "Fizz" for multiples of 3', () => {
        const result = fizzBuzz(3)

        expect(result).toBe("Fizz")
    })

    test('Should returns "Buzz" for multiples of 5', () => {
        const result = fizzBuzz(5)

        expect(result).toBe("Buzz")
    })

    test('Should returns "FizzBuzz" for multiples of 3 & 5', () => {
        const result = fizzBuzz(15)

        expect(result).toBe("FizzBuzz")
    })

    test('Should returns 1 when fizzBuzz is called with number = 1', () => {
        const result = fizzBuzz(1)

        expect(result).toBe(1)
    })
})