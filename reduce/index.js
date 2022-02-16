const dataset = [
  'red',
  'blue',
  'black',
  'red',
  'red',
  'black',
  'black',
  'red',
  'black',
  'red',
  'red',
  'red',
  'red',
  'black',
  'red',
  'blue',
  'red',
  'blue',
  'red',
  'red',
  'blue',
  'red',
  'blue',
  'red',
  'red',
  'red',
  'blue',
  'red',
  'purple',
  'red',
  'red',
];

// This is the reducer function, that holds the actual logic
// acc (accumulator) is a value we return (or pass in initially)
// key is the current value of the array (like in a foreach)
const reducer = (acc, key) => {
  if (!acc[key]) {
    acc[key] = 1;
  } else {
    acc[key]++;
  }
  return acc;
};

// We can execute the reducer using the reduce function, and pass in the default value of the acc
const result = dataset.reduce(reducer, {});

console.log(result);
