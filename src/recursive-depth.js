import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if(!(arr.length && Array.isArray(arr))) {
      return 1;
    }
    const result = arr.reduce((acc, curr) => {
      if (Array.isArray(curr)) {
        acc.push(this.calculateDepth(curr) + 1)
      }
      return acc;
    }, [1]);

    return Math.max(...result);
  }
}
