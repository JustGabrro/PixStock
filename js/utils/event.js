/**
 * @copyright justgabrro 2024
 * @author sadee <specispeci01@gmail.com>
 */

"use strict";


/**
 * Add event on multiple elements
 * @param {NodeList} $elements NodeList
 * @param {String} eventType Event type eg. "click"
 * @param {Function} callback  Callback function
 */

export const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach($element => $element.addEventListener(eventType, callback));
}