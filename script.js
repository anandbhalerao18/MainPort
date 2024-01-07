const header = document.querryselector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY >100);
}); 