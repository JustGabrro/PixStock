/**
 * @copyright justgabrro 2024
 * @author sadee <specispeci01@gmail.com>
 */

"use strict";


/**
 * Initial columns
 * @param {Node} $gridContainer Grid container
 * @returns {Object} Column & columns height array
 */

export const gridInit = function ($gridContainer) {

  const /** {NodeList} */ $columns = [];
  const /** {Array} */ columnsHeight = [];

  const /** {Number} */ columnCount = Number(getComputedStyle($gridContainer).getPropertyValue("--column-count"));

  for (let i = 0; i < columnCount; i++) {
    const /** {NodeElement} */ $column = document.createElement("div");
    $column.classList.add("column");
    $gridContainer.appendChild($column);
    $columns.push($column);
    columnsHeight.push(0);
  }

  return { $columns, columnsHeight };

}


/**
 * Update masonry grid
 * @param {Node} $card Grid item
 * @param {Array} columnsHeight Height of all columns
 * @param {NodeList} $columns All columns
 */

export const updateGrid = function ($card, columnsHeight, $columns) {

  const /** {Number} */ minColumnHeight = Math.min(...columnsHeight);
  const /** {Number} */ minColumnIndex = columnsHeight.indexOf(minColumnHeight);

  $columns[minColumnIndex].appendChild($card);
  columnsHeight[minColumnIndex] = $columns[minColumnIndex].offsetHeight;

}