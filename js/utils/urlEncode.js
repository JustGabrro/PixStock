/**
* @copyright justgabrro 2024
* @author sadee <specispeci01@gmail.com>
*/

"use strict";

/**
 * Convert Object to Url
 * @param {Object} urlObj url object
 * @returns url string
 */

export const urlEncode = urlObj => {
  return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}