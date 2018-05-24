/*
 * @Author: Jiang Zhaojin 
 * @Date: 2018-05-24 10:26:34 
 * @Last Modified by: Jiang Zhaojin
 * @Last Modified time: 2018-05-24 14:51:26
 */

import lodash from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return lodash.reduce(numRef, (accum, ref) => {
    return ref.num === num ? ref.word : accum;
  }, '')
}

export function wordToNum(word) {
  return lodash.reduce(numRef, (accum, ref) => {
    return ref.word === word && word.toLowerCase() ? ref.num : accum;
  }, -1)
}