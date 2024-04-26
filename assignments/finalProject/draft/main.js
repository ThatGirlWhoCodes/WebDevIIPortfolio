document.addEventListener('DOMContentLoaded', (event) => {
    window.toggleCourses = function(element) {
      var categoryList = element.nextElementSibling;
      categoryList.classList.toggle('open');
    }
  });
// function toggleCourses(element){
//     var categoryList = element.nextElementSibling;
//     categoryList.classList.toggle('open');
// }