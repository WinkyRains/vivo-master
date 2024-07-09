window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var newImageTop = -scrollTop * 1.5;
    var newTextOpacity = Math.min(scrollTop / 100, 1);
    document.querySelector('.image').style.transform = 'translateY(' + newImageTop + 'px)';
    document.querySelector('.text').style.opacity = newTextOpacity;
});