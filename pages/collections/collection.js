/**
 * @copyright justgabrro 2024
 * @author sadee <specispeci01@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { client } from "../../js/api_configure.js";
import { collectionCard } from "../../js/collection_card.js";


/**
 * Render featured collections
 */

const /** {NodeElement} */ $collectionGrid = document.querySelector("[data-collection-grid]");
const /** {Number} */ perPage = 36;
let /** {Number} */ currentPage = 1;
let /** {Number} */ totalPage = 0;

/**
 * @param {Number} page Page number
 */

const loadCollections = function (page) {

  client.collections.featured({ per_page: perPage, page: page }, data => {

    totalPage = Math.ceil(data.total_results / perPage);

    data.collections.forEach(collection => {

      const /** {NodeElement} */ $collectionCard = collectionCard(collection);

      $collectionGrid.appendChild($collectionCard);

    });

    isLoaded = true;
    (currentPage >= totalPage) && ($loader.style.display = "none");

  });

}

loadCollections(currentPage);


/**
 * Load more collections
 */

const /** {NodeElement} */ $loader = document.querySelector("[data-loader]");
let /** {Boolean} */ isLoaded = false;

const loadMore = function () {
  if ($loader.getBoundingClientRect().top < (window.innerHeight * 2) && currentPage <= totalPage && isLoaded) {

    currentPage++;
    loadCollections(currentPage);
    isLoaded = false;

  }
}

window.addEventListener("scroll", loadMore);