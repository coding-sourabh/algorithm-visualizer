import React, { useState } from "react";
import "./SortingVisualizer.css";
import { bubbleSort } from "./sortingAlgos/BubbleSort";
import { mergeSort } from "./sortingAlgos/MergeSort";
import { quickSort } from "./sortingAlgos/QuickSort";
import { heapSort } from "./sortingAlgos/HeapSort";

// Change this value to change the speed of the animation.
const ANIMATION_SPEED_MS = 1;

// Change this value to change the size of array or number of bars.
const NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#82EEFD";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "green";

function SortingVisualizer() {
  const [array, setarray] = useState([]);

  const generateArray = () => {
    const arr = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(Math.random() * (530 - 5 + 1) + 5);
    }
    setarray(arr);

    const arrayBars = document.getElementsByClassName("all__bars");
    for (let i = 0; i < arrayBars.length; i++)
      arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
  };

  const makeChanges = (animations) => {
    const arrayBars = document.getElementsByClassName("all__bars");

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i];
      if (i % 3 === 2) {
        // change
        setTimeout(() => {
          const height = barTwoIdx;
          arrayBars[barOneIdx].style.height = `${height}px`;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // compare
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor =
            i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

          arrayBars[barTwoIdx].style.backgroundColor =
            i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const handleBubbleSort = () => {
    const animations = bubbleSort(array);
    makeChanges(animations);
  };

  const handleMergeSort = () => {
    const animations = mergeSort(array);
    makeChanges(animations);
  };

  const handleQuickSort = () => {
    const animations = quickSort(array);
    makeChanges(animations);
  };

  const handleHeapSort = () => {
    const animations = heapSort(array);
    makeChanges(animations);
  };

  return (
    <div className="sorting__visualizerHead">
      <div className="sorting__visualizer">
        {array.map((value, idx) => (
          //don't forget to write return i waste too much time on that thing

          <div
            className="all__bars"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
        <br />
        <button className="gen btn-warning" onClick={generateArray}>
          Generate Array
        </button>
        <button className="bub btn-success" onClick={handleBubbleSort}>
          Bubble Sort
        </button>

        <button className="mer btn-success" onClick={handleMergeSort}>
          Merge Sort
        </button>

        <button className="qui btn-success" onClick={handleQuickSort}>
          Quick Sort
        </button>

        <button className="hea btn-success" onClick={handleHeapSort}>
          Heap Sort
        </button>

        <button className="halt btn-danger">Halt</button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
