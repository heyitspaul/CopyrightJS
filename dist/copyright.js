"use strict";

jQuery(document).ready(function ($) {
  $(".copyright-year").each(function () {
    var currentYear = new Date().getFullYear();
    var startYear = parseInt($(this).text());

    if (isNaN(startYear)) {
      console.error("The copyright year \"" + $(this).text() + "\" is not a valid year. Using current year instead.");
      $(this).text(currentYear);
    }

    if (startYear > currentYear) {
      console.warn("The copyright year \"" + startYear + "\" is in the future.");
    }

    if (currentYear > startYear) {
      $(this).text(startYear + " - " + currentYear);
    }
  });
});
