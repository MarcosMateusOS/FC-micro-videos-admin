import { validate as uuidValidate } from 'uuid';
import { InvalidUuidError, Uuid } from "../uuid.vo";
describe('Uuid Unit Tests', () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

    test('should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrowError(new InvalidUuidError('Invalid uuid'))
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('should create a valid uuid', () => {
        const uuid = new Uuid()
        expect(uuid.id).toBeDefined()
        expect(uuidValidate(uuid.id)).toBe(true)
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })

    test('should acceot a valid uuid', () => {
        const uuid = new Uuid('2b1e7e8c-c248-416f-aa72-72a4d8145d84')
        expect(uuid.id).toBe('2b1e7e8c-c248-416f-aa72-72a4d8145d84')
        expect(validateSpy).toHaveBeenCalledTimes(1)
    })
})