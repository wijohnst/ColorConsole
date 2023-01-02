# @wijohnst/color_console

## Semantic, colorful console logging for Node / JavaScript / Typescript

Color Console makes it super easy to add colored output to your application's console without remembering complicated escape codes.

## NPM

[@wijohnst/color_console](https://www.npmjs.com/package/@wijohnst/color_console)

## Installing Color Console

```other
npm install @wijohnst/color_console
```

## Usage

### Basic

Import and instantiate a new `ColorConsole`. Pass a regular string and prefix with any of the 8 supported `color_` values to output text in that color.

```other
import ColorConsole from '@wijohnst/color_console';

const colorConsole = new ColorConsole();

colorConsole.log(`red_I'm red text`);
```

### Resetting

Any text preceding a supported `color_` string will be that color. To revert to the original text color, simply add the `_reset` string. Any text preceding `_reset` will default to the user's default output color.

```other
colorConsole.log(`red_I'm red text._reset I'm default colored text.)
```

### Multiple Colors

Multiple `color_` strings and the `_reset` string will return multiple colors.

```other
colorConsole.log(`red_RED_reset green_GREEN_reset)
```

### Supported Colors

- `black_`
- `red_`
- `yellow_`
- `blue_`
- `magenta_`
- `cyan_`
- `white_`
- `_reset`
