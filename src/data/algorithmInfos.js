const algorithmInfos = {
  bubble_sort: {
    name: "Bubble Sort",
    time_complexity: {
      best: ["O(n)", "yellow-600"],
      average: ["O(n^2)", "red-800"],
      worst: ["O(n^2)", "red-800"],
    },
    space_complexity: ["O(1)", "green-800"],
    description: `
			Bubble sort is a straightforward sorting algorithm that repeatedly swaps adjacent elements in an array if they are in the wrong order. This process continues until the entire array is sorted.

The algorithm begins at the start of the array and moves through it, swapping adjacent elements that are out of order. Once it reaches the end of the array, it starts again from the beginning. This cycle repeats until no further swaps are needed, indicating that the array is sorted.

Despite its time complexity of O(n^2), which makes it less efficient compared to other sorting algorithms, bubble sort can be useful for small arrays or as a simple example to illustrate the basic principles of sorting algorithms.`,
  },
  insertion_sort: {
    name: "Insertion Sort",
    time_complexity: {
      best: ["O(n)", "yellow-600"],
      average: ["O(n^2)", "red-800"],
      worst: ["O(n^2)", "red-800"],
    },
    space_complexity: ["O(1)", "green-800"],
    description: `
	Insertion sort is a straightforward sorting algorithm that organizes elements by repeatedly inserting them from an unsorted array into their correct position within a sorted sub-array.

The algorithm begins by treating the first element of the array as a sorted sub-array. It then selects the next element, compares it with elements in the sorted sub-array, and shifts elements to the right until the correct position for the new element is found. This process continues for each subsequent element until the entire array is sorted.

Insertion sort is a stable sorting algorithm, meaning it maintains the relative order of equal elements in the array. It's also an in-place algorithm, requiring no extra memory beyond the original array. However, with a time complexity of O(n^2) in the worst case, insertion sort is not ideal for large data sets, though it can be quite efficient for small or nearly sorted arrays.`,
  },
  selection_sort: {
    name: "Selection Sort",
    time_complexity: {
      best: ["O(n^2)", "red-800"],
      average: ["O(n^2)", "red-800"],
      worst: ["O(n^2)", "red-800"],
    },
    space_complexity: ["O(1)", "green-800"],
    description: `
			Selection sort is a sorting algorithm that organizes an array by repeatedly finding the minimum element from the unsorted portion and placing it at the beginning.

The algorithm starts by identifying the minimum element in the entire array and swapping it with the first element. It then finds the minimum element in the remaining unsorted section and swaps it with the second element. This process continues until the entire array is sorted.

Despite its O(n^2) time complexity, selection sort is useful for small arrays and educational purposes due to its simplicity.`,
  },
  merge_sort: {
    name: "Merge Sort",
    time_complexity: {
      best: ["O(n log(n))", "orange-700"],
      average: ["O(n log(n))", "orange-700"],
      worst: ["O(n log(n))", "orange-700"],
    },
    space_complexity: ["O(n)", "yellow-600"],
    description: `
		Merge sort is a widely used sorting algorithm that employs a divide-and-conquer strategy. It sorts an array by breaking it down into smaller, sorted subarrays and then merging those subarrays to form a fully sorted array.

The algorithm begins by dividing the unsorted array into two halves and then recursively splits each half into smaller halves until each subarray contains just one element. It then merges these subarrays back together, comparing the first elements of each and arranging them in the correct order. This process continues until the entire array is sorted.

Although merge sort is both efficient and reliable, it is not as commonly used as some other sorting algorithms. This is mainly due to its additional space requirements and some performance drawbacks compared to other sorting methods.`,
  },
  quick_sort: {
    name: "Quick Sort",
    time_complexity: {
      best: ["O(n log(n))", "orange-700"],
      average: ["O(n log(n))", "orange-700"],
      worst: ["O(n^2)", "red-800"],
    },
    space_complexity: ["O(log (n))", "lime-700"],
    description: `
		Quick sort is a widely used sorting algorithm that leverages a divide-and-conquer strategy to sort an array of elements.

The core concept of quick sort involves partitioning the array into two smaller sub-arrays using a chosen pivot element. Elements smaller than the pivot are placed in the left sub-array, while elements larger than the pivot go to the right sub-array. This partitioning is recursively applied to each sub-array until they become small enough to be easily sorted. Once all sub-arrays are sorted, they are combined to produce the final sorted array.

Quick sort is renowned for its efficiency and is commonly used in practice, such as in the V8 JavaScript engine. However, it can suffer from poor performance if the pivot is poorly chosen or if the input data is already sorted or nearly sorted.`,
  },
  radix_sort: {
    name: "Radix Sort",
    time_complexity: {
      best: ["O(nk)", "green-800"],
      average: ["O(nk)", "green-800"],
      worst: ["O(nk)", "green-800"],
    },
    space_complexity: ["O(n+k)", "yellow-600"],
    description: `
		Radix Sort is a non-comparative sorting algorithm that organizes elements based on their digits or characters. It works by iterating through each digit or character position and sorting elements according to their values at that position. This process is repeated for each digit or character until the entire array is sorted.

Radix Sort can be implemented using either the Least Significant Digit (LSD) or Most Significant Digit (MSD) approach. LSD Radix Sort begins by sorting elements based on their least significant digit and proceeds to the next digit until all digits have been sorted. Conversely, MSD Radix Sort starts with the most significant digit and moves to the next digit, sorting elements as it goes.

A key advantage of Radix Sort is its time complexity of O(nk), where n is the number of elements and k is the number of digits or characters in each element. This makes Radix Sort particularly efficient for large datasets, especially when the number of digits or characters is small. However, it may be less efficient for smaller datasets and requires additional memory to store intermediate results during the sorting process.`,
  },
};

export default algorithmInfos;
