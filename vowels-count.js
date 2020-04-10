function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const result = str.split('').reduce((acc, el) => {
    if (vowels.includes(el)) {
      acc += el.length;
    }
    return acc;
  }, 0);

  return result;
}

console.log(getCount('mishal'));
