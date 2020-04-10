// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  const arr = s.split('');
  if (arr.length % 2 === 0) {
    return arr.splice((arr.length + 1) / 2 - 1, 2).join('');
  }
  return arr.splice((arr.length + 1) / 2 - 1, 1).join('');
}

console.log(getMiddle('misha'));
