const titulo = document.querySelector(".hero h1");

document.addEventListener("mousemove", (evento) => {

    const x = (evento.clientX / window.innerWidth - 0.5) * 15;
    const y = (evento.clientY / window.innerHeight - 0.5) * 15;

    titulo.style.transform = `translate(${x}px, ${y}px)`;

});
