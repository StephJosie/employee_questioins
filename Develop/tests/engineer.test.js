const Engineer = require('../Utils/engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('Github username', () => {
            let testEngineer = new Engineer('testName', 'testID', 'testEmail', 'testGithub')
            let expectedResult = 'testGithub'
            let result = testEngineer.getGithub()
            expect(result).toEqual(expectedResult)
        });
    });
    describe('getRole', () => {
        it('Engineer Role', () => {
            let testEngineer = new Engineer('testName', 'testID', 'testEmail', 'testGithub')
            let expectedResult = 'Engineer'
            let result = testEngineer.getRole()
            expect(result).toEqual(expectedResult)
        });
    });

});
