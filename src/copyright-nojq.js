// A transpiled version of this code is available in the /dist folder.

(function(){
  // We want to ensure that the DOM is loaded before running our code.
  document.addEventListener("DOMContentLoaded", function(){
    /* Despite the output of an HTMLCollection *looking* like an array, it
     * doesn't actually function like one, so we need to perform a quick little
     * conversion into an array so we can make our lives easier.
     */
    let copyrightCollection = document.querySelectorAll(".copyright-year")
    let copyrightElements = Array.prototype.slice.call(copyrightCollection)

    copyrightElements.forEach(function(copyrightYear){
      /* Just like in the jQuery version, we assume there may be more than 1
       * element and iterate through the array of copyright years
       */
      let currentYear = new Date().getFullYear()
      let startYear = parseInt(copyrightYear.innerHTML)

      if(isNaN(startYear)){
        console.error(`The copyright year "${copyrightYear.innerHTML}" is not a valid year. Using current year instead.`)
        copyrightYear.innerHTML = currentYear
      }

      if(startYear > currentYear){
        console.warn(`The copyright year "${startYear}" is in the future.`)
      }

      if(currentYear > startYear){
        copyrightYear.innerHTML = `${startYear} - ${currentYear}`
      }

    })
  })
})();
