// A transpiled version of this code is available in the /dist folder.

jQuery(document).ready(function($){
  $(".copyright-year").each(function(){
    /* Just in case there are multiple copyright years to iterate through,
     * we'll use css classes and go through each instance to display the correct
     * copyright year in every location.
     */
    let currentYear = new Date().getFullYear()
    let startYear   = parseInt($(this).text())

    if(isNaN(startYear)){
      /* For whatever reason the year passed to us was invalid. We display a
       * console error and fallback to the current year.
       */
      console.error(`The copyright year "${$(this).text()}" is not a valid year. Using current year instead.`)
      $(this).text(currentYear)
    }

    if(startYear > currentYear){
      /* In this case the year given is in in the future. We'll display a
       * warning message in the console and make no changes to the supplied
       * year since this could be intentional.
       */
      console.warn(`The copyright year "${startYear}" is in the future.`)
    }

    if(currentYear > startYear){
      $(this).text(`${startYear} - ${currentYear}`)
    }
  })
})
