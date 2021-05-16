export function bubbleSort(array) {
  const animations = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);

      if (array[j] > array[j + 1]) {
        // if we need swap then we will push swap and need to add 3 pushes again for the other element too

        animations.push([j, array[j + 1]]);
        animations.push([j, j + 1]);
        animations.push([j, j + 1]);
        animations.push([j + 1, array[j]]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } else animations.push([j, array[j]]); // otherwise we can simply do dummy swap

      // // if this is the last swap then our required last item must be sorted paint it to sorted color
      // if (j === array.length - i - 2)
      //   animation.push([array.length - i - 2, -1, 3]);
      // else animation.push([j, j + 1, 2]); // otherwise bring back the previous original color for the both
    }
  }
  return animations;
}
