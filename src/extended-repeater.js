import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(
  str,
  {
    addition = '',
    separator = '+',
    repeatTimes = 0,
    additionSeparator = '|',
    additionRepeatTimes = 0,
  }
) {
  const stringifiedAddition = `${addition}`;

  const additionalString = additionRepeatTimes > 1
      ? Array.from({ length: additionRepeatTimes }, () => stringifiedAddition).join(
          additionSeparator
        )
      : stringifiedAddition;

  const concatenatedStr = `${str}${additionalString}`;

  return repeatTimes > 1
      ? Array.from({ length: repeatTimes }, () => concatenatedStr).join(separator)
      : concatenatedStr;

}
