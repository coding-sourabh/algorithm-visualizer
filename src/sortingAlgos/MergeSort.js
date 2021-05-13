export function mergeSort(array) {
  if (array.lenght <= 1) return array;
  const animations = [];
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, animations, auxiliaryArray);
  return animations;
}

function mergeSortHelper(originalArray, l, r, animations, auxiliaryArray) {
  if (l === r) {
    return; //returns recursively
  }
  const m = Math.floor((l + r) / 2);
  mergeSortHelper(auxiliaryArray, l, m, animations, originalArray);
  mergeSortHelper(auxiliaryArray, m + 1, r, animations, originalArray);
  merge(originalArray, l, m, r, animations, auxiliaryArray);
}

function merge(originalArray, l, m, r, animations, auxiliaryArray) {
  let k = l,
    i = l,
    j = m + 1;
  while (i <= m && j <= r) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      originalArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      originalArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= m) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    originalArray[k++] = auxiliaryArray[i++];
  }
  while (j <= r) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    originalArray[k++] = auxiliaryArray[j++];
  }
}
