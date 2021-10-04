const commands = {
  discardNext: '--discard-next',
  discardPrev: '--discard-prev',
  doubleNext: '--double-next',
  doublePrev: '--double-prev',
};

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  let deletedNext;
  return arr.reduce((acc, curr, i) => {
    if (i === 0 && (curr === commands.doublePrev || curr === commands.discardPrev)) {
      return acc;
    }

    if (i === arr.length - 1 && (curr === commands.doubleNext || curr === commands.doublePrev)) {
      return acc;
    }

    if (curr === commands.doubleNext) {
      acc.push(arr[i + 1]);
    } else if (curr === commands.doublePrev) {
      const prev = arr[i - 1];
      if(prev !== deletedNext) {
        acc.push(prev);
      }
    } else if (curr === commands.discardPrev) {
      delete acc[i - 1];
    } else if (curr === commands.discardNext) {
      deletedNext = arr[i + 1];
    } else if (deletedNext === curr) {
      return acc;
    } else {
      acc.push(curr);
    }

    return acc;
  }, []).filter(Boolean);
}
