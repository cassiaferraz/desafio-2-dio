// declarando nome dos herois
const heroi1= ("Motivação" [xp= 5000]);
const heroi2= ("Disciplina" [xp= 10000]);




// Criando a variável xp para o grupo de heróis
const niveis = [
     0,          
     1000,       
     2000,       
    3000, 4000, 5000, 6000, 7000, 8000, 9000,
    10000, ...
    1000000000  
];

// Estrutura de decisão para determinar o nível
let nivel;
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
   alert (nivel = "Bronze");
} else if (xp >= 2001 && xp <= 5000) {
   alert (nivel = "Prata");
} else if (xp >= 6001 && xp <= 7000) {
   alert (nivel = "Ouro");
} else if (xp >= 7001 && xp <= 8000) {
   alert (nivel = "Platina");
} else if (xp >= 8001 && xp <= 9000) {
   alert (nivel = "Ascendente");
} else if (xp >= 9001 && xp <= 10000) {
   alert (nivel = "Imortal");
} else if (xp <= 10000) {
  alert  (nivel = "Radiante");
}

console.log(`O grupo de heróis está no nível ${nivel}.`);

console.log(heroi1 + xp)