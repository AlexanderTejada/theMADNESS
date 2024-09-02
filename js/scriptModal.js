// Get the modal
var modal = document.getElementById("rulesModal");

// Get the button that opens the modal
var btn = document.querySelector(".button");

// Get the <span> element that closes the modal
var span = document.querySelector(".close-button");

// Function to get scrollbar width
function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

// Function to open modal
function openModal() {
    const scrollbarWidth = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.classList.add('modal-open');
    modal.style.display = "block";
    modal.style.opacity = 0;
    setTimeout(() => modal.style.opacity = 1, 10);
}

// Function to close modal
function closeModal() {
    document.body.style.paddingRight = '';
    document.body.classList.remove('modal-open');
    modal.style.opacity = 0;
    setTimeout(() => modal.style.display = "none", 300);
}

// When the user clicks the button, open the modal 
btn.onclick = openModal;

// When the user clicks on <span> (x), close the modal
span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('show');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
