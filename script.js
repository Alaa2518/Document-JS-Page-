
let allBullets = document.querySelectorAll(".links-ul .bullet");

allBullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        console.log(e.target.dataset.section);
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
