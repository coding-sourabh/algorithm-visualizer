export function heapSort(array) {
  const animations = [];
  console.log(array);
  heapSortHelper(array, array.length, animations);
  console.log(array);
  return animations;
}

// main function to do heap sort
function heapSortHelper(arr, n, animations) {
  // Build heap (rearrange array)
  for (let i = n / 2 - 1; i >= 0; i--) heapify(arr, n, i , animations);

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    animations.push([0, i]);
    animations.push([0, i]);
    animations.push([0, arr[i]]);

    animations.push([0, i]);
    animations.push([0, i]);
    animations.push([i, arr[0]]);
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // call max heapify on the reduced heap
    heapify(arr, i, 0 , animations);
  }
}

function heapify(arr, n, i, animations) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    animations.push([i, largest]);
    animations.push([i, largest]);
    animations.push([i, arr[largest]]);

    animations.push([i, largest]);
    animations.push([i, largest]);
    animations.push([largest, arr[i]]);
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest , animations);
  }
}
