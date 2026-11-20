/**
 * StringManipulator — utility class for string manipulation.
 *
 * Can be used in two ways:
 * 1. Regular import in another file:
 *    - ESM:   import StringManipulator from 'string-manipulator'
 *    - CJS:   const StringManipulator = require('string-manipulator')
 * 2. Run as module/script:
 *    node string-manipulator.js
 */

import { pathToFileURL } from 'url';

class StringManipulator {
  /**
   * Splits a string by the specified separator and removes empty elements.
   *
   * @param {string} stringToSplit - The input string to split.
   * @param {string} [separator=" "] - The delimiter.
   * @returns {string[]} Array of non-empty substrings.
   */
  splitText(stringToSplit, separator = " ") {
    const array = [];
    const splitedText = stringToSplit.split(separator);

    for (const word of splitedText) {
      if (word) {
        array.push(word);
      }
    }

    return array;
  }

  /**
   * Extracts a substring between the first occurrences of startSymbol and endSymbol.
   *
   * @param {string} string - The source text.
   * @param {string} [startSymbol] - Starting delimiter (excluded from result).
   * @param {string} [endSymbol] - Ending delimiter (excluded from result).
   * @returns {string} The extracted substring.
   */
  getCuttedText(string, startSymbol, endSymbol) {
    let from = 0;
    let to = string.length;

    if (startSymbol) from = string.indexOf(startSymbol) + 1;
    if (endSymbol) to = string.indexOf(endSymbol);

    return string.slice(from, to);
  }

  /**
   * Performs a case-insensitive comparison between two strings.
   *
   * @param {string} text1 - The first string.
   * @param {string} text2 - The second string.
   * @returns {boolean} true if strings are identical ignoring case.
   */
  isSame(text1, text2) {
    return text1.toLowerCase() === text2.toLowerCase();
  }

  /**
   * Splits a string into an array using the specified delimiter.
   *
   * @param {string} text - The input text.
   * @param {string} [symbolSplit=","] - The delimiter.
   * @returns {string[]} Array of substrings.
   */
  getArrayByText(text, symbolSplit = ",") {
    return text.split(symbolSplit);
  }

  /**
   * Replaces all line breaks in a text with a single space, converting it into a single line.
   *
   * @param {string} text - The multiline input text.
   * @returns {string} A single-line string without line breaks.
   */
  getTextInOneLine(text) {
    return text.replace(/(\r\n|\n|\r)/gm, " ");
  }

  /**
   * Converts newline characters (\n) into HTML line break tags (<br>).
   *
   * @param {string} text - The plain text containing newline characters.
   * @returns {string} The HTML-formatted string.
   */
  getConvertedTextToHTML(text) {
    return this.replaceSymbols(text, "\n", "<br>");
  }

  /**
   * Replaces all occurrences of a specific substring within a text, safely escaping regex special characters.
   *
   * @param {string} text - The source text.
   * @param {string} find - The substring to search for.
   * @param {string} replace - The replacement string.
   * @returns {string} The updated text with all matches replaced.
   */
  replaceSymbols(text, find, replace) {
    const escapedFind = find.replace(/([.*+?^=!:${}()|[\]\\/])/g, "\\$1");
    return text.replace(new RegExp(escapedFind, "g"), replace);
  }

  /**
   * Removes the last character from a given string.
   *
   * @param {string} text_to_edit - The input string.
   * @returns {string} The string without its final character.
   */
  getTextWithoutLastSymbol(text_to_edit) {
    return text_to_edit.substring(0, text_to_edit.length - 1);
  }

  /**
   * Extracts the last word from a string after trimming leading and trailing whitespace.
   *
   * @param {string} text - The input text.
   * @param {string} [symolBeforeWord=" "] - The delimiter separating words.
   * @returns {string} The last word in the string.
   */
  getLastWord(text, symbolBeforeWord = " ") {
    text = text.trim();
    const separatedWords = text.split(symbolBeforeWord);
    return separatedWords[separatedWords.length - 1];
  }

  /**
   * Extracts a specific range of words from a string based on start and end word indices.
   *
   * @param {string} str - The input text.
   * @param {number} firstIndexWord - The zero-based starting word index (inclusive).
   * @param {number} [lastIndexWord] - The zero-based ending word index (exclusive).
   * @returns {string} A space-separated string containing the selected range of words.
   */
  getWords(str, firstIndexWord, lastIndexWord) {
    return str.split(/\s+/).slice(firstIndexWord, lastIndexWord).join(" ");
  }

  /**
   * Retrieves the first line of a multiline string.
   *
   * @param {string} str - The input text.
   * @returns {string} The first line of the text.
   */
  getFirstLine(str) {
    return str.split("\n")[0];
  }

  /**
   * Splits a camelCase string into separate space-delimited words.
   *
   * @param {string} str - The camelCase string (e.g., "camelCaseText").
   * @returns {string} The space-separated string (e.g., "camel Case Text").
   */
  getSeparatedWordsByCamelCaseString(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  /**
   * Replaces all non-alphanumeric characters in a string with a specified replacement character.
   *
   * @param {string} str - The input text containing special characters.
   * @param {string} [symbolInsted=" "] - The character used to replace special characters.
   * @returns {string} The sanitized string containing only letters, numbers, and the replacement character.
   */
  getTextWithoutSpecialCharactes(str, symbolInsted = " ") {
    return str.replace(/[^\p{L}\p{N} ]/gu, symbolInsted);
  }
}

export default StringManipulator;
export { StringManipulator };

/**
 * If the file is run directly (node string-manipulator.js),
 * outputs a demonstration of all methods.
 */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const sm = new StringManipulator();

  console.log('=== StringManipulator — demonstration ===\n');

  console.log('1. splitText("hello   world   foo"):', sm.splitText('hello   world   foo'));
  console.log('2. getCuttedText("Hello [world]!", "[", "]"):', sm.getCuttedText('Hello [world]!', '[', ']'));
  console.log('3. isSame("Hello", "hello"):', sm.isSame('Hello', 'hello'));
  console.log('4. getArrayByText("a,b,c", ","):', sm.getArrayByText('a,b,c', ','));
  console.log('5. getTextInOneLine("line1\\nline2\\r\\nline3"):', sm.getTextInOneLine('line1\nline2\r\nline3'));
  console.log('6. getConvertedTextToHTML("hello\\nworld"):', sm.getConvertedTextToHTML('hello\nworld'));
  console.log('7. replaceSymbols("foo bar foo", "foo", "baz"):', sm.replaceSymbols('foo bar foo', 'foo', 'baz'));
  console.log('8. getTextWithoutLastSymbol("hello!"):', sm.getTextWithoutLastSymbol('hello!'));
  console.log('9. getLastWord("hello world foo"):', sm.getLastWord('hello world foo'));
  console.log('10. getWords("one two three four", 1, 3):', sm.getWords('one two three four', 1, 3));
  console.log('11. getFirstLine("first\\nsecond\\nthird"):', sm.getFirstLine('first\nsecond\nthird'));
  console.log('12. getSeparatedWordsByCamelCaseString("camelCaseText"):', sm.getSeparatedWordsByCamelCaseString('camelCaseText'));
  console.log('13. getTextWithoutSpecialCharactes("hello@world! 123"):', sm.getTextWithoutSpecialCharactes('hello@world! 123'));
}
