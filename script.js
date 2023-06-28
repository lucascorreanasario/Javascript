const quantidade = 8;

function Impares(valor){
    let contar = 0;
    let newValor = valor

    while(contar<quantidade){
        if(newValor % 2 !== 0){
            console.log(newValor);
            contar++;
        }
    newValor++;
    }
    
}

Impares(34);
