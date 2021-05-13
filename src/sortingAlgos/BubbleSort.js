export function bubbleSort(array) {
  const animation = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animation.push([j, j + 1, 0]);
      if (array[j] > array[j + 1]) {
        animation.push([j, array[j + 1], 1]);
        animation.push([j + 1, array[j], 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      // if this is the last swap then our required last item must be sorted paint it to sorted color
      if (j === array.length - i - 2)
        animation.push([array.length - i - 2, -1, 3]);
      else animation.push([j, j + 1, 2]); // otherwise bring back the previous original color for the both
    }
  }
  return animation;
}
