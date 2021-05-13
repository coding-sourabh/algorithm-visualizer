import React, { useState } from "react";
import "./SortingVisualizer.css";
import { bubbleSort } from "./sortingAlgos/BubbleSort";
import { mergeSort } from "./sortingAlgos/MergeSort";
// Change this value to change the speed of the animation.
const ANIMATION_SPEED_MS = 1;

// Change this value to change the size of array or number of bars.
const NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = "coral";

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

  const handleBubbleSort = () => {
    const arrayBars = document.getElementsByClassName("all__bars");

    const animation = bubbleSort(array);

    for (let i = 0; i < animation.length; i++) {
      const [barOneIdx, barTwoIdx, swap] = animation[i];

      if (swap === 0) {
        // only comparison
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = SECONDARY_COLOR;
          arrayBars[barTwoIdx].style.backgroundColor = SECONDARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
      } else if (swap === 2) {
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = PRIMARY_COLOR;
          arrayBars[barTwoIdx].style.backgroundColor = PRIMARY_COLOR;
        }, i * ANIMATION_SPEED_MS);
      } else if (swap === 1) {
        // swap
        setTimeout(() => {
          arrayBars[barOneIdx].style.height = `${barTwoIdx}px`;
        }, i * ANIMATION_SPEED_MS);
      } else {
        // last swap
        arrayBars[barOneIdx].style.backgroundColor = SECONDARY_COLOR;
      }
    }
  };

  const handleMergeSort = () => {
    const animations = mergeSort(array);
    const arrayBars = document.getElementsByClassName("all__bars");

    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i];

      if (i % 3 === 2) {
        // change
        setTimeout(() => {
          const height = barTwoIdx;
          // console.log(arrayBars[barOneIdx].style.height);
          arrayBars[barOneIdx].style.height = `${height}px`;
        }, i * ANIMATION_SPEED_MS);
      } else {
        //compare
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor =
           (i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR);

          arrayBars[barOneIdx].style.backgroundColor =
            (i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR);

        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const handleQuickSort = () => {};
  const handleHeapSort = () => {};

  return (
    <div className="sorting__visualizer">
      <div className="all_bars">
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
      </div>

      <button className="gen" onClick={generateArray}>
        Generate Array
      </button>
      <button className="bub" onClick={handleBubbleSort}>
        Bubble Sort
      </button>

      <button className="bub" onClick={handleMergeSort}>
        Merge Sort
      </button>

      <button className="bub" onClick={handleQuickSort}>
        Quick Sort
      </button>

      <button className="bub" onClick={handleHeapSort}>
        Heap Sort
      </button>
    </div>
  );
}

export default SortingVisualizer;
