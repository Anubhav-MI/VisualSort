import { useContext, useEffect } from "react";

import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";

function SortingChart() {
  const {
    sortingState,
    generateSortingArray,
    startVisualizing,
    changeSortingSpeed,
    changeAlgorithm,
  } = useContext(SortingContext);

  useEffect(() => {
    generateSortingArray();
  }, []);

  return (
    <div className="mt-4 mb-4 flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold mb-8">VisualSort</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => changeAlgorithm("bubble_sort")}
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md ${
            sortingState.algorithm === "bubble_sort"
              ? "bg-green-600"
              : "hover:bg-blue-500"
          } transition-transform transform hover:scale-105`}
        >
          Bubble Sort
        </button>
        <button
          onClick={() => changeAlgorithm("insertion_sort")}
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md ${
            sortingState.algorithm === "insertion_sort"
              ? "bg-green-600"
              : "hover:bg-blue-500"
          } transition-transform transform hover:scale-105`}
        >
          Insertion Sort
        </button>
        <button
          onClick={() => changeAlgorithm("selection_sort")}
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md ${
            sortingState.algorithm === "selection_sort"
              ? "bg-green-600"
              : "hover:bg-blue-500"
          } transition-transform transform hover:scale-105`}
        >
          Selection Sort
        </button>
        <button
          onClick={() => changeAlgorithm("merge_sort")}
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md ${
            sortingState.algorithm === "merge_sort"
              ? "bg-green-600"
              : "hover:bg-blue-500"
          } transition-transform transform hover:scale-105`}
        >
          Merge Sort
        </button>
        <button
          onClick={() => changeAlgorithm("quick_sort")}
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md ${
            sortingState.algorithm === "quick_sort"
              ? "bg-green-600"
              : "hover:bg-blue-500"
          } transition-transform transform hover:scale-105`}
        >
          Quick Sort
        </button>
        <button
          onClick={() => changeAlgorithm("radix_sort")}
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md ${
            sortingState.algorithm === "radix_sort"
              ? "bg-green-600"
              : "hover:bg-blue-500"
          } transition-transform transform hover:scale-105`}
        >
          Radix Sort
        </button>
      </div>

      <div className="max-w-3xl w-full">
        <div className="mb-6 chart-container relative">
          <div className="base"></div>
          {sortingState.array.map((bar, i) => (
            <div key={i} className="bar-container">
              <div
                className={`select-none bar bar-${bar.state}`}
                style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}
              >
                <p
                  className={`text-center text-sm font-semibold ${
                    bar.state === "idle" ? "text-blue-200" : "text-pink-300"
                  }`}
                >
                  {bar.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 max-w-4xl mx-auto mb-8">
          <button
            disabled={sortingState.sorting}
            onClick={startVisualizing}
            className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-all"
          >
            Start
          </button>
          <button
            disabled={sortingState.sorting}
            onClick={() => generateSortingArray()}
            className="px-5 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition-all"
          >
            New Array
          </button>
          <select
            disabled={sortingState.sorting}
            onChange={changeSortingSpeed}
            defaultValue="slow"
            className="bg-gray-800 text-white px-3 py-2 rounded-md cursor-pointer outline-none focus:ring-2 focus:ring-blue-300 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all appearance-none"
            style={{
              backgroundImage: `url('data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5"%3E%3Cpath fill="none" stroke="%23ffffff" stroke-width="1px" d="M0 0l2 2 2-2"%3E%3C/path%3E%3C/svg%3E')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "0.65rem",
            }}
          >
            <option value="fast">Fast</option>
            <option value="normal">Normal</option>
            <option value="slow">Slow</option>
          </select>
        </div>

        <div className="w-full h-0.5 bg-carbon-light mb-4" />
        <div>
          <h1 className="font-bold text-2xl md:text-4xl">
            {algorithmInfos[sortingState.algorithm].name}
          </h1>
          <p className="whitespace-pre-line mb-6">
            {algorithmInfos[sortingState.algorithm].description}
          </p>
          <div className="w-full h-0.5 bg-carbon-light mb-6" />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th
                    className="px-6 py-3 border-r border-blue-600"
                    rowSpan={2}
                  >
                    Algorithm
                  </th>
                  <th
                    className="px-6 py-3 border-r border-blue-600"
                    colSpan={3}
                  >
                    Time Complexity
                  </th>
                  <th className="px-6 py-3">Space Complexity</th>
                </tr>
                <tr className="bg-blue-700 text-white">
                  <th className="px-6 py-2">Best</th>
                  <th className="px-6 py-2">Average</th>
                  <th className="px-6 py-2 border-r border-blue-600">Worst</th>
                  <th className="px-6 py-2">Worst</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(algorithmInfos).map((key, i) => (
                  <tr
                    key={i}
                    className="hover:bg-blue-50 border-b border-blue-200 whitespace-nowrap"
                  >
                    <td
                      className={`px-6 py-3 ${
                        i === 0 ? "pt-4" : "pt-3"
                      } border-r border-blue-200`}
                    >
                      {algorithmInfos[key].name}
                    </td>
                    <td className={`px-6 py-3 ${i === 0 ? "pt-4" : "pt-3"}`}>
                      <span
                        className={`px-2 py-1 rounded-md bg-${algorithmInfos[key].time_complexity.best[1]} text-white`}
                      >
                        {algorithmInfos[key].time_complexity.best[0]}
                      </span>
                    </td>
                    <td className={`px-6 py-3 ${i === 0 ? "pt-4" : "pt-3"}`}>
                      <span
                        className={`px-2 py-1 rounded-md bg-${algorithmInfos[key].time_complexity.average[1]} text-white`}
                      >
                        {algorithmInfos[key].time_complexity.average[0]}
                      </span>
                    </td>
                    <td
                      className={`px-6 py-3 ${
                        i === 0 ? "pt-4" : "pt-3"
                      } border-r border-blue-200`}
                    >
                      <span
                        className={`px-2 py-1 rounded-md bg-${algorithmInfos[key].time_complexity.worst[1]} text-white`}
                      >
                        {algorithmInfos[key].time_complexity.worst[0]}
                      </span>
                    </td>
                    <td className={`px-6 py-3 ${i === 0 ? "pt-4" : "pt-3"}`}>
                      <span
                        className={`px-2 py-1 rounded-md bg-${algorithmInfos[key].space_complexity[1]} text-white`}
                      >
                        {algorithmInfos[key].space_complexity[0]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortingChart;
