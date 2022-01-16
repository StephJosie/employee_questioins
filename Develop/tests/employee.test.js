const Employee = require('../Utils/employee');


describe('getName', () => {
    it('Return name of the employee', () => {
        let testEmployee = new Employee('testName', 'testID', 'testEmail')
        let expectedResult = 'testName'
        let result = testEmployee.getName()
        expect(result).toEqual(expectedResult)
    });
});

describe('getEmail', () => {
    it('return email of the employee', () => {
        let testEmployee = new Employee('testName', 'testID', 'testEmail')
        let expectedResult = 'testEmail'
        let result = testEmployee.getEmail()
        expect(result).toEqual(expectedResult)
    });
});

describe('getID', () => {
    it('ID should be returned', () => {
        let testEmployee = new Employee('testName', 'testID', 'testEmail')
        let expectedResult = 'testID'
        let result = testEmployee.getId()
        expect(result).toEqual(expectedResult)
    });
});


