# string-manipulator

Utility package for string manipulation in JavaScript/Node.js.

Supports two connection methods:

1. **Regular import** in another file (`require` / `import`)
2. **Run as module** (`node string-manipulator.js`)

---

## Installation

If the package is published on npm:

```bash
npm install string-manipulator
```

Or use it locally by connecting the folder as a package.

---

## Quick Start

### ESM (import)

```javascript
import StringManipulator from 'string-manipulator';

const sm = new StringManipulator();
sm.splitText('hello world'); // ["hello", "world"]
```

### CommonJS (require)

```javascript
const StringManipulator = require('string-manipulator');

const sm = new StringManipulator();
sm.splitText('hello world'); // ["hello", "world"]
```

### Run as module (demonstration)

```bash
node string-manipulator.js
```

Outputs examples of all methods.

---

## API

### `new StringManipulator()`

Creates a string manipulator instance.

### `splitText(stringToSplit, separator = " ")` → `string[]`

Splits a string by the delimiter and removes empty elements.

```javascript
sm.splitText('hello   world');       // ["hello", "world"]
sm.splitText('a,b,c', ',');          // ["a", "b", "c"]
```

### `getCuttedText(string, startSymbol?, endSymbol?)` → `string`

Extracts a substring between the first occurrences of `startSymbol` and `endSymbol`.

```javascript
sm.getCuttedText('Hello [world]!', '[', ']'); // "world"
sm.getCuttedText('abc def', null, ' ');       // "abc"
```

### `isSame(text1, text2)` → `boolean`

Compares two strings case-insensitively.

```javascript
sm.isSame('Hello', 'hello'); // true
sm.isSame('abc', 'abd');     // false
```

### `getArrayByText(text, symbolSplit = ",")` → `string[]`

Splits a string into an array by the specified delimiter.

```javascript
sm.getArrayByText('apple,banana', ','); // ["apple", "banana"]
```

### `getTextInOneLine(text)` → `string`

Removes all line breaks, replacing them with a space.

```javascript
sm.getTextInOneLine('line1\nline2\r\nline3'); // "line1 line2 line3"
```

### `getConvertedTextToHTML(text)` → `string`

Converts `\n` to HTML `<br>` tag.

```javascript
sm.getConvertedTextToHTML('Hello\nWorld'); // "Hello<br>World"
```

### `replaceSymbols(text, find, replace)` → `string`

Replaces all occurrences of a substring, safely escaping regex special characters.

```javascript
sm.replaceSymbols('foo.bar.foo', '.', '|'); // "foo|bar|foo"
```

### `getTextWithoutLastSymbol(text_to_edit)` → `string`

Removes the last character of the string.

```javascript
sm.getTextWithoutLastSymbol('Hello!'); // "Hello"
```

### `getLastWord(text, symbolBeforeWord = " ")` → `string`

Returns the last word of the string after trimming spaces.

```javascript
sm.getLastWord('hello world foo'); // "foo"
```

### `getWords(str, firstIndexWord, lastIndexWord?)` → `string`

Returns a range of words by indices.

```javascript
sm.getWords('one two three four', 1, 3); // "two three"
```

### `getFirstLine(str)` → `string`

Returns the first line of multiline text.

```javascript
sm.getFirstLine('First\nSecond\nThird'); // "First"
```

### `getSeparatedWordsByCamelCaseString(str)` → `string`

Splits a camelCase string into words separated by spaces.

```javascript
sm.getSeparatedWordsByCamelCaseString('myVariableName'); // "my Variable Name"
```

### `getTextWithoutSpecialCharactes(str, symbolInsted = " ")` → `string`

Replaces all non-alphanumeric characters (except spaces) with the specified character.

```javascript
sm.getTextWithoutSpecialCharactes('user@example.com!', '_'); // "user example com _"
```

---

## Package Structure

```
string-manipulator/
├── package.json          # Package manifest (ESM + CJS export)
├── string-manipulator.js # Main module (ESM, can be run directly)
├── string-manipulator.cjs # CommonJS wrapper for require()
├── example.js            # Usage examples
└── README.md             # Documentation
```

---

## License

MIT