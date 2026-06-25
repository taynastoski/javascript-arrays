const notas = [4, 7, 6, 3];

notas.pop();

notas.push(3);

const media = (notas[0] + notas[1] + notas[2] + notas[3] ) / notas.length;

console.log(media);