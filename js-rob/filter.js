const dTab = document.querySelector('.d-tab');
const dActive = document.querySelectorAll('.cp-active');

dTab.addEventListener('click', e => {
    dActive.style.backgroundColor = "yellow";
});

