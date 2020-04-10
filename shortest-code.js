// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s) {
  const arr = s.split(' ');
  let small = arr[0].split('').length;

  for (let i = 0; i < arr.length; i++) {
    if (small > arr[i].split('').length) {
      small = arr[i].split('').length;
    }
  }
  return small;
}

console.log(
  findShort(
    'turns out random test cases are easier than writing out basic ones'
  )
);
