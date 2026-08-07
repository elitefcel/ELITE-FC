// Animación del título principal

const titulo = document.querySelector(".hero h1");

document.addEventListener("mousemove", (evento) => {

    const x = (evento.clientX / window.innerWidth - 0.5) * 20;
    const y = (evento.clientY / window.innerHeight - 0.5) * 20;

    titulo.style.transform = `translate(${x}px, ${y}px)`;
});

// Animación de los enlaces del menú

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

// Animación de las tarjetas

const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach((tarjeta) => {

    tarjeta.addEventListener("mouseenter", () => {
        tarjeta.style.transform = "translateY(-8px)";
        tarjeta.style.boxShadow = "0 0 20px rgba(255,255,255,0.2)";
    });

    tarjeta.addEventListener("mouseleave", () => {
        tarjeta.style.transform = "translateY(0)";
        tarjeta.style.boxShadow = "none";
    });

});

// Efecto de aparición

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
