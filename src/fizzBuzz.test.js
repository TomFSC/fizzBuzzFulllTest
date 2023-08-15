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
})