let colorKeys = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
];

async function buildTower(levels) {
  const colors = await import('yoctocolors');
  const bottomLayer = height * 2 - 1;

  for (let layer = 1; layer <= height; layer++) {
    const colorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    const amountOfStones = layer * 2 - 1;
    const amountOfAir = (bottomLayer - amountOfStones) / 2;
    const stones = '#'.repeat(amountOfStones);
    const space = ' '.repeat(amountOfAir);
    console.log(space + colors[colorKey](stones) + space);
  }
}

const height = process.argv[2];
buildTower(height);
