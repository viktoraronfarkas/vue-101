const height = process.argv[2] || 10;

// Let's get the last layer and heighest amount of stones
const bottomLayer = height * 2 - 1;

// Build the tower top to bottom
for (let layer = 1; layer <= height; layer++) {
  // How many stones are in this layer
  const stones = layer * 2 - 1;
  // How much air should there be on one side
  const air = (bottomLayer - stones) / 2;
  // Print out air - stones - air
  console.log(' '.repeat(air) + '#'.repeat(stones) + ' '.repeat(air));
}
