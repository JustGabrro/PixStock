/**
 * @copyright justgabrro 2024
 * @author sadee <specispeci01@gmail.com>
 */

"use strict";

/** 
 * Import
 */

import { addEventOnElements } from "./utils/event.js";


/**
 * Add segment functionality
 * @param {Node} $segment Segmented button container
 * @param {Function} callback Callback function
 */

export const segment = function ($segment, callback) {

  const /** {NodeList} */ $segmentBtns = $segment.querySelectorAll("[data-segment-btn]");
  let /** {NodeElement} */ $lastSelectedSegmentBtn = $segment.querySelector("[data-segment-btn].selected");

  addEventOnElements($segmentBtns, "click", function () {
    $lastSelectedSegmentBtn.classList.remove("selected");
    this.classList.add("selected");
    $lastSelectedSegmentBtn = this;
    callback(this.dataset.segmentValue);
  });

}