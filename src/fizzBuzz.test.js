const {fizzBuzz} = require('./fizzBuzz')

describe('fizzBuzz', () => {
    test('Should returns "Fizz" for multiples of 3', () => {
        const result = fizzBuzz(3)

        expect(result).toBe("Fizz")
    })
})