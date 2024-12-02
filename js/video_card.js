/**
 * @copyright justgabrro 2024
 * @author sadee <specispeci01@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { ripple } from "./utils/ripple.js";
import { favorite } from "./favorite.js";
import { hoverOnPlay } from "./utils/hoverOnPlay.js";


/**
 * Create video card
 * @param {Object} video Video object
 * @returns {Node} Video card
 */

export const videoCard = video => {

  const /** {String} */ root = window.location.origin;

  // console.log(video);

  const {
    height,
    width,
    id,
    image,
    video_files
  } = video;

  const /** {Object} */ sdVideo = video_files.find(item => item.quality === "sd" && item.width < 1000);
  const { file_type, link } = sdVideo;

  const /** {NodeElement} */ $card = document.createElement("div");
  $card.classList.add("card", "grid-item", "video");

  const /** {Object} */ favoriteObj = JSON.parse(window.localStorage.getItem("favorite"));

  $card.innerHTML = `
    <div class="card-banner" style="--width: ${width}; --height: ${height}">
      <video poster="${image}" muted loop preload="none" class="img-cover" data-video>
        <source src="${link}" type="${file_type}">
      </video>
    </div>

    <div class="card-content">
      <button class="icon-btn small ${favoriteObj.videos[id] ? "active" : ""}" aria-label="Add to favorite" data-ripple data-favorite-btn>
      <span class="material-symbols-outlined" aria-hidden="true">favorite</span>

        <div class="state-layer"></div>
      </button>
    </div>

    <span class="card-badge" data-card-badge>
      <span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>
    </span>

    <a href="${root}/pages/videos/video_detail.html?id=${id}" class="state-layer"></a>
  `;

  const /** {NodeList} */ $rippleElems = [$card, $card.querySelector("[data-ripple]")];

  $rippleElems.forEach($rippleElem => ripple($rippleElem));

  const /** {NodeElement} */ $favoriteBtn = $card.querySelector("[data-favorite-btn]");
  favorite($favoriteBtn, "videos", id);

  hoverOnPlay($card);

  return $card;

}