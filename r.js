document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000);
});














AOS.init({
    duration: 3000,
    once: true,
  });







