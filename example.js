/**
 * Usage examples for the string-manipulator package.
 *
 * Run: node example.js
 */

import StringManipulator from './string-manipulator.js';

const sm = new StringManipulator();

console.log('=== string-manipulator usage examples ===\n');

// 1. Split string into words (without empty elements)
console.log('splitText:', sm.splitText('Hello   world,   this   is   a   test!'));

// 2. Get text between brackets
console.log('getCuttedText:', sm.getCuttedText('Name: [Ivan] Surname: [Petrov]', '[', ']'));

// 3. Case-insensitive string comparison
console.log('isSame:', sm.isSame('JavaScript', 'javascript'));

// 4. Split string into array by comma
console.log('getArrayByText:', sm.getArrayByText('apple,banana,orange', ','));

// 5. Remove line breaks (single line)
console.log('getTextInOneLine:', sm.getTextInOneLine('Line 1\nLine 2\r\nLine 3'));

// 6. Convert line breaks to <br>
console.log('getConvertedTextToHTML:', sm.getConvertedTextToHTML('First line\nSecond line'));

// 7. Replace all substring occurrences
console.log('replaceSymbols:', sm.replaceSymbols('foo bar foo baz foo', 'foo', 'QUX'));

// 8. Remove last character
console.log('getTextWithoutLastSymbol:', sm.getTextWithoutLastSymbol('Hello!'));

// 9. Last word
console.log('getLastWord:', sm.getLastWord('  first middle last  '));

// 10. Word range
console.log('getWords:', sm.getWords('one two three four five', 1, 4));

// 11. First line
console.log('getFirstLine:', sm.getFirstLine('First\nSecond\nThird'));

// 12. camelCase -> words
console.log('getSeparatedWordsByCamelCaseString:', sm.getSeparatedWordsByCamelCaseString('myVariableName'));

// 13. Remove special characters
console.log('getTextWithoutSpecialCharactes:', sm.getTextWithoutSpecialCharactes('user@example.com #2024!'));