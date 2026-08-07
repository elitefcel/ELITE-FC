const titulo = document.querySelector(".hero h1");

document.addEventListener("mousemove", (evento) => {

    const x = (evento.clientX / window.innerWidth - 0.5) * 20;
    const y = (evento.clientY / window.innerHeight - 0.5) * 20;

    titulo.style.transform = `translate(${x}px, ${y}px)`;
});

const links = document.querySelectorAll("nav a");

links.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        link.style.transform = "scale(1.1)";
        link.style.transition = "0.3s";
    });

    link.addEventListener("mouseleave", () => {
        link.style.transform = "scale(1)";
    });

});
