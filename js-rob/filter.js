const dTab = document.getElementById('d-tab');
const dActive = document.querySelectorAll('.d-active');

dTab.addEventListener('click', e => {
    dActive.style.display = "none";
    console.log(e);
});

// const filter = () => {
//     console.log("tamer");
// }

