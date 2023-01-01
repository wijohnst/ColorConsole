export interface ColorConsole {}
export class ColorConsole implements ColorConsole{

	public printString(stringToPrint: string){
		console.log(stringToPrint);
	}
}