const datos = {
    nombre: 'Francisco',
    apellido: 'Paneque',
    edad: 29,
    altura: 174,
    eresDesarrollador: true
}

const age = datos.edad;

const lista = [ {...datos},
    {
        nombre: 'Francisco',
        apellido: 'Garcia',
        edad: 29,
        altura: 175,
        eresDesarrollador: false 
    },
    {
        nombre: 'Laura',
        apellido: 'Rebola',
        edad: 22,
        altura: 163,
        eresDesarrollador: false
    }
];

const orden = lista.sort((a, b) => b.edad - a.edad);

console.log(orden);

