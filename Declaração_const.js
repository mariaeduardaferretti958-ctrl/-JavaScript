function exemploConst () {
    const x = 10; 
    if (true) {
        const y = 20; //mesma variavel x é redeclarada dentro do bloco 
        console.log(y); // 20
    }
    console.log(x); //  20 (o valor foi alterado)
}

exemploConst();