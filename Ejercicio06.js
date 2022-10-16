const lista = ['Pan', 'Leche', 'Huevos', 'Macarrones', 'Tomates'];

lista.push('Aceite de Girasol');

lista.pop();

const listaPelis = [
    {
        titulo: 'EL club de la lucha',
        director: 'David Fincher',
        fecha: new Date(1999, 9, 10)
    },
    {
        titulo: 'The Matrix',
        director: 'Lili y Lana Wachowski',
        fecha: new Date(1999, 3, 31)
    },
    {
        titulo: 'Spiderman',
        director: 'Sam Raimi',
        fecha: new Date(2002, 5, 3)
    }
]

const pelis2010 = listaPelis.filter(listaPelis => listaPelis.fecha > new Date(2010, 0, 1));

const directores = listaPelis.map(listaPelis => {
    return listaPelis.director;
})

const titulos = listaPelis.map(listaPelis => {
    return listaPelis.titulo;
})

const directores_titulos = directores.concat(titulos);

const directores_titulos_pro = [...directores,...titulos];