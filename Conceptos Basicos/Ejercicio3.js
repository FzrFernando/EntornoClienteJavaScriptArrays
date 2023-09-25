let notas = [4,8,3,10,5];

let notasOrdenadas = notas.sort(function(num1,num2){
    if (num1 > num2){
        return 1
    }
    else {
        return -1
    }
})

console.log(notasOrdenadas);