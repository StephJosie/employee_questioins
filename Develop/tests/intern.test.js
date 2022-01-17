const Intern = require('../Utils/intern');
describe('Intern', () => {
    describe('getSchool', () => {
        it('School attended', () => {
            let testIntern = new Intern('testName', 'testID', 'testEmail', 'testSchool')
            let expectedResult = 'testSchool'
            let result = testIntern.getSchool()
            expect(result).toEqual(expectedResult)
        });
    });
    describe('getRole', () => {
        it('Intern Role', () => {
            let testIntern = new Intern('testName', 'testID', 'testEmail', 'testSchool')
            let expectedResult = 'Intern'
            let result = testIntern.getRole()
            expect(result).toEqual(expectedResult)
        });
    });

});