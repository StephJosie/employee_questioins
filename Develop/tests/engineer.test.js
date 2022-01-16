const Engineer = require('../Utils/engineer');


describe('getGithub', () => {
    it('Github username', () => {
        let testEngineer = new Engineer('testName', 'testID', 'testEmail', 'testGithub')
        let expectedResult = 'testGithub'
        let result = testEngineer.getGitHub()
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
