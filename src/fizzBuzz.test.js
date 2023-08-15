const {fizzBuzz} = require('./fizzBuzz')

describe('fizzBuzz', () => {
    test('Should returns "Fizz" for multiples of 3', () => {
        const number = 3
        const fizz = "Fizz"
        const result = fizzBuzz(number)

        expect(result).toBe(fizz)
    })

    test('Should returns "Buzz" for multiples of 5', () => {
        const number = 5
        const Buzz = "Buzz"
        const result = fizzBuzz(number)

        expect(result).toBe(Buzz)
    })

    test('Should returns "FizzBuzz" for multiples of 3 & 5', () => {
        const number = 15
        const FizzBuzz = "FizzBuzz"
        const result = fizzBuzz(number)

        expect(result).toBe(FizzBuzz)
    })

    test('Should returns 1 when fizzBuzz is called with number = 1', () => {
        const number = 1
        const result = fizzBuzz(number)

        expect(result).toBe(number)
    })
})