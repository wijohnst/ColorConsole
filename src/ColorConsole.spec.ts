import { generateStringWithColorEscapeCode, colorMap } from './ColorConsole';

describe('ColorConsole unit tests', () => {
	it('Should return the correct string when `red_` is passed', () => {
		expect(generateStringWithColorEscapeCode("red_TEST")).toEqual(`${colorMap.red_}TEST`);
	})
})