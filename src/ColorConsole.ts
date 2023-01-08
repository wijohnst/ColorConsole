type ColorMap = { [key: string]: string };

const colorMap: ColorMap = {
  black_: "\u001b[30m",
  red_: "\u001b[31m",
  green_: "\u001b[32m",
  yellow_: "\u001b[33m",
  blue_: "\u001b[34m",
  magenta_: "\u001b[35m",
  cyan_: "\u001b[36m",
  white_: "\u001b[37m",
  _reset: "\u001b[0m",
};

const colorStrings: string[] = Object.keys(colorMap);
export class ColorConsole {
  public log(stringToPrint: string) {
    console.log(
      colorStrings.reduce((finalString: string, color: string): string => {
        const matcher = new RegExp(color, "g");
        return finalString.replace(matcher, colorMap[color]);
      }, stringToPrint)
    );
  }
}
