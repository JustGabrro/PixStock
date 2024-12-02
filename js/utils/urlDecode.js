/**
* @copyright justgabrro 2024
* @author sadee <specispeci01@gmail.com>
*/

"use strict";

/**
 * Convert Url to Object
 * @param {String} urlString Url string
 * @returns {Object} Url object
 */

export const urlDecode = urlString => {
  return Object.fromEntries(urlString.replace(/%23/g, "#").replace(/%20/g, " ").split("&").map(i => i.split("=")));
}