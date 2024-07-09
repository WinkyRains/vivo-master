var ob = document.getElementById("btn-play");

// Intersection Observer options
const options = {
    root: null, // Use viewport as root
    threshold: [0, 0.5, 1], // Array of thresholds
};

// Intersection Observer callback
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};

// Create the Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Observe each text section
document.querySelectorAll('.text-section').forEach(section => {
    observer.observe(section);
});
