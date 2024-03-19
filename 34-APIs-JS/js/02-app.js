/**
 * Intersection observer API
 */

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        console.log(entries);
    });

    observer.observe(document.querySelector('.premium'));
});