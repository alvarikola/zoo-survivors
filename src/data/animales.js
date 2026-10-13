// Para añadir un animal, copia un bloque y cambia los datos. La web crea su ficha sola.
// Los sprites van en la carpeta public/sprites/
export const animales = [
  {
    slug: 'perro', nombre: 'Perro', sprite: '/sprites/perro.png',
    resumen: 'El guardián del zoo. Personaje base, sin bonus ni penalizaciones.',
    bonus: 'Sin modificadores',
    descripcion: 'El perro conoce cada rincón del zoo y no piensa dejar que nadie lo invada. Es el personaje más equilibrado: ideal para aprender cómo funcionan las oleadas, la tienda y las armas.',
    stats: [['Vida', 'Base'], ['Velocidad de movimiento', 'Base'], ['Velocidad de ataque', 'Base']],
  },
  {
    slug: 'gato', nombre: 'Gato', sprite: '/sprites/gato.png', // pon aquí '/sprites/gato.png' cuando tengas el sprite
   
    resumen: 'Ágil y nervioso. Dispara mucho más rápido que el resto.',
    bonus: '+ Velocidad de ataque',
    descripcion: 'El gato duerme de día y vigila de noche, y los alienígenas lo pillaron despierto. Su ritmo de disparo es el más alto, ideal para builds que lo apuestan todo al ataque.',
    stats: [['Vida', 'Base'], ['Velocidad de movimiento', 'Base'], ['Velocidad de ataque', 'Más alta']],
  },
];
