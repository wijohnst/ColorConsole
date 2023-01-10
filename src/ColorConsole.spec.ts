import { generateStringWithColorEscapeCode, colorMap } from './ColorConsole';

describe('ColorConsole unit tests', () => {
	const colorMapValues = Object.entries(colorMap);
	test.each(colorMapValues)('when passing %s, expect the correct escape code',(humanReadableColorString, escapeCode) => {
		expect(generateStringWithColorEscapeCode(`${humanReadableColorString}Test`)).toEqual(`${escapeCode}Test`);
	})	
})