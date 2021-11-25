numeros.reduce(function(total,num) {
    return total * num;
}, 1);

//Refatorando o reduce com uma arrow function
numeros.reduce((total,num) => total * num, 1);
