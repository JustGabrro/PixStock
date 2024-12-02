/**
 * @copyright justgabrro 2024
 * @author sadee <specispeci01@gmail.com>
 */

"use strict";

export const hoverOnPlay = function ($card) {

  const /** {NodeElement} */ $cardVideo = $card.querySelector("[data-video]");
  const /** {NodeElement} */ $cardBadge = $card.querySelector("[data-card-badge]");
  let /** {Boolean} */ isPlaying = false;
  let /** {Function} */ playTimeout;

  $card.addEventListener("pointerover", function () {
    playTimeout = setTimeout(() => {

      $cardBadge.style.display = "none";

      $cardVideo.play().then(res => {
        isPlaying = true;
      }).catch(err => {
        isPlaying = false;
      });

    }, 500);
  });

  $card.addEventListener("pointerout", function () {

    playTimeout && clearTimeout(playTimeout);
    $cardBadge.style.display = "grid";
    if (isPlaying) $cardVideo.pause();

  });

}