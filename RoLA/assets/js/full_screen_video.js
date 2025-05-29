document.addEventListener('DOMContentLoaded', function () {
    const videoElement = document.getElementById('bg-video');
    videoElement.addEventListener('loadedmetadata', function () {
        videoElement.style.opacity = 1.0;
    });
});
window.addEventListener("scroll", function () {
    let imageDiv = document.querySelector('.full-page-image');
    const videoElement = document.getElementById('bg-video');

    if (window.scrollY > 175) {
        videoElement.style.opacity = 0;
    }
    // Check if page is scrolled
    if (window.scrollY > 200) { // You can adjust this value based on your requirement
        imageDiv.classList.add('banner-state');
        imageDiv.classList.add('no-content');
    }
});