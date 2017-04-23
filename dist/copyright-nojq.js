"use strict";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var copyrightCollection = document.querySelectorAll(".copyright-year");
    var copyrightElements = Array.prototype.slice.call(copyrightCollection);

    copyrightElements.forEach(function (copyrightYear) {
      var currentYear = new Date().getFullYear();
      var startYear = parseInt(copyrightYear.innerHTML);

      if (isNaN(startYear)) {
        console.error("The copyright year \"" + copyrightYear.innerHTML + "\" is not a valid year. Using current year instead.");
        copyrightYear.innerHTML = currentYear;
      }

      if (startYear > currentYear) {
        console.warn("The copyright year \"" + startYear + "\" is in the future.");
      }

      if (currentYear > startYear) {
        copyrightYear.innerHTML = startYear + " - " + currentYear;
      }
    });
  });
})();
