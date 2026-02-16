// Highlight pull quotes on scroll
const quotes = document.querySelectorAll('.pull-quote');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "translateX(0)";
            entry.target.style.opacity = "1";
        }
    });
}, { threshold: 0.5 });

quotes.forEach(quote => {
    quote.style.transform = "translateX(-20px)";
    quote.style.opacity = "0";
    quote.style.transition = "all 0.6s ease";
    observer.observe(quote);
});
