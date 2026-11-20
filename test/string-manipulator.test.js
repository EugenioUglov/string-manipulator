import test from 'node:test';
import assert from 'node:assert/strict';
import StringManipulator from '../string-manipulator.js';
import CJSStringManipulator from '../string-manipulator.cjs';

test('StringManipulator class is exported and constructable (ESM)', () => {
  assert.ok(StringManipulator);
  assert.equal(typeof StringManipulator, 'function');
  const sm = new StringManipulator();
  assert.ok(sm);
});

test('StringManipulator class is exported and constructable (CJS)', () => {
  assert.ok(CJSStringManipulator);
  assert.equal(typeof CJSStringManipulator, 'function');
  const sm = new CJSStringManipulator();
  assert.ok(sm);
});

test('splitText splits by space and removes empty elements', () => {
  const sm = new StringManipulator();
  assert.deepEqual(sm.splitText('hello   world   foo'), ['hello', 'world', 'foo']);
  assert.deepEqual(sm.splitText('a b c'), ['a', 'b', 'c']);
  assert.deepEqual(sm.splitText('   '), []);
});

test('splitText uses custom separator', () => {
  const sm = new StringManipulator();
  assert.deepEqual(sm.splitText('a,b,c', ','), ['a', 'b', 'c']);
  assert.deepEqual(sm.splitText('one|two|three', '|'), ['one', 'two', 'three']);
});

test('getCuttedText extracts text between delimiters', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getCuttedText('Hello [world]!', '[', ']'), 'world');
  assert.equal(sm.getCuttedText('abc[def]ghi', '[', ']'), 'def');
});

test('getCuttedText handles missing startSymbol', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getCuttedText('hello world', null, ' '), 'hello');
});

test('getCuttedText handles missing endSymbol', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getCuttedText('hello world', ' ', null), 'world');
});

test('isSame compares strings case-insensitively', () => {
  const sm = new StringManipulator();
  assert.equal(sm.isSame('Hello', 'hello'), true);
  assert.equal(sm.isSame('JavaScript', 'javascript'), true);
  assert.equal(sm.isSame('abc', 'abd'), false);
  assert.equal(sm.isSame('', ''), true);
});

test('getArrayByText splits by comma by default', () => {
  const sm = new StringManipulator();
  assert.deepEqual(sm.getArrayByText('a,b,c'), ['a', 'b', 'c']);
  assert.deepEqual(sm.getArrayByText('x,y,z'), ['x', 'y', 'z']);
});

test('getArrayByText uses custom separator', () => {
  const sm = new StringManipulator();
  assert.deepEqual(sm.getArrayByText('one;two;three', ';'), ['one', 'two', 'three']);
});

test('getTextInOneLine replaces line breaks with space', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getTextInOneLine('line1\nline2\r\nline3'), 'line1 line2 line3');
  assert.equal(sm.getTextInOneLine('single'), 'single');
});

test('getConvertedTextToHTML converts newlines to br tags', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getConvertedTextToHTML('hello\nworld'), 'hello<br>world');
  assert.equal(sm.getConvertedTextToHTML('a\nb\nc'), 'a<br>b<br>c');
});

test('replaceSymbols replaces all occurrences safely', () => {
  const sm = new StringManipulator();
  assert.equal(sm.replaceSymbols('foo.bar.foo', '.', '|'), 'foo|bar|foo');
  assert.equal(sm.replaceSymbols('foo bar foo', 'foo', 'baz'), 'baz bar baz');
  assert.equal(sm.replaceSymbols('test[1] test[2]', '[', '('), 'test(1] test(2]');
});

test('getTextWithoutLastSymbol removes last character', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getTextWithoutLastSymbol('hello!'), 'hello');
  assert.equal(sm.getTextWithoutLastSymbol('abc'), 'ab');
  assert.equal(sm.getTextWithoutLastSymbol(''), '');
});

test('getLastWord returns last word after trimming', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getLastWord('hello world foo'), 'foo');
  assert.equal(sm.getLastWord('  spaced  words  '), 'words');
  assert.equal(sm.getLastWord('single'), 'single');
});

test('getLastWord uses custom delimiter', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getLastWord('a,b,c,d', ','), 'd');
});

test('getWords extracts word range by indices', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getWords('one two three four five', 1, 3), 'two three');
  assert.equal(sm.getWords('a b c', 0, 2), 'a b');
  assert.equal(sm.getWords('x y z', 0), 'x y z');
});

test('getFirstLine returns first line of multiline text', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getFirstLine('first\nsecond\nthird'), 'first');
  assert.equal(sm.getFirstLine('only one line'), 'only one line');
});

test('getSeparatedWordsByCamelCaseString splits camelCase', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getSeparatedWordsByCamelCaseString('camelCaseText'), 'camel Case Text');
  assert.equal(sm.getSeparatedWordsByCamelCaseString('myVariableName'), 'my Variable Name');
  assert.equal(sm.getSeparatedWordsByCamelCaseString('simple'), 'simple');
});

test('getTextWithoutSpecialCharactes replaces non-alphanumeric characters', () => {
  const sm = new StringManipulator();
  assert.equal(sm.getTextWithoutSpecialCharactes('hello@world! 123'), 'hello world  123');
  assert.equal(sm.getTextWithoutSpecialCharactes('user@example.com', '_'), 'user_example_com');
  assert.equal(sm.getTextWithoutSpecialCharactes('abc123'), 'abc123');
});
