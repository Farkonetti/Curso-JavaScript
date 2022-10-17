function siempre() {
    return true;
}

async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

function pare() {
    let id = 0;
    while(true) {
        yield id += 2;
    }
}