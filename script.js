* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #000;
    color: #fff;
    font-family: Arial, sans-serif;
}

header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 40px;
    background: rgba(0, 0, 0, 0.9);

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 28px;
    font-weight: bold;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

.hero {
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.hero h1 {
    font-size: 80px;

    text-shadow:
        0 0 10px white,
        0 0 20px white,
        0 0 40px white;
}

.hero p {
    margin-top: 20px;
}

.botao {
    margin-top: 30px;
    padding: 15px 30px;
    border: 2px solid white;
    border-radius: 10px;
    color: white;
    text-decoration: none;
}

.section {
    padding: 100px 10%;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.card {
    padding: 25px;
    border-radius: 15px;
    background: #111;
}

#redes {
    text-align: center;
}

footer {
    padding: 30px;
}
