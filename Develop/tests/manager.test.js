const Manager = require('../Utils/manager');
describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('Office Number', () => {
            let testManager = new Manager('testName', 'testID', 'testEmail', 'testOfficeNumber')
            let expectedResult = 'testOfficeNumber'
            let result = testManager.getOfficeNumber()
            expect(result).toEqual(expectedResult)
        });
    });

    describe('getRole', () => {
        it('should return the role of the Manager entered by the user', () => {
            let testManager = new Manager('testName', 'testID', 'testEmail', 'testOfficeNumber')
            let expectedResult = 'Manager'
            let result = testManager.getRole()
            expect(result).toEqual(expectedResult)
        });
    });

});