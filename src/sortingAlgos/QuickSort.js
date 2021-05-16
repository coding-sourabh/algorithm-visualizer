export function quickSort(array) {
  const animations = [];

  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    /* pi is partitioning index, arr[p] is now
           at right place */
    let pi = partition(arr, low, high, animations);

    // Separately sort elements before
    // partition and after partition

    quickSortHelper(arr, low, pi - 1, animations);
    quickSortHelper(arr, pi + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  let pivot = arr[high]; // pivot
  let i = low - 1,
    j; // Index of smaller element

  for (j = low; j <= high - 1; j++) {
    // If current element is smaller than or
    // equal to pivot
    if (arr[j] <= pivot) {
      animations.push([i + 1, j]); // to change color of the current comparing indexes
      animations.push([i + 1, j]); // to change color of the current comparing indexes
      animations.push([i + 1, arr[j]]); // to change value

      animations.push([i + 1, j]); // to change color of the current comparing indexes
      animations.push([i + 1, j]); // to change color of the current comparing indexes
      animations.push([j, arr[i + 1]]); // to change value
      i++; // increment index of smaller element
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  animations.push([i + 1, high]); // to change color of the current comparing indexes
  animations.push([i + 1, high]); // to change color of the current comparing indexes
  animations.push([i + 1, arr[high]]);

  animations.push([i + 1, high]); // to change color of the current comparing indexes
  animations.push([i + 1, high]); // to change color of the current comparing indexes
  animations.push([high, arr[i + 1]]); // to change value
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}
