let backBtn = document.getElementById('backBtn');
let nextBtn = document.getElementById('nextBtn');
let gallery = document.querySelector('.gallery');

gallery.addEventListener('scroll', () => {
    if (gallery.scrollLeft > 0) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }

    if (gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
});

backBtn.addEventListener('click', () => {
    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft -= 900;
});

nextBtn.addEventListener('click', () => {
    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft += 900;
});