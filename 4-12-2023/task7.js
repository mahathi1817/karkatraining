let array1 = ['a', 'b', 'c', 'd']; 
let array2 = ['e', 'f', 'c']; 
function common(array1,array2){
    for(i=0; i< array1.length; i++){
        for(j=0; j< array2.length;j++){
            if(array1[i]===array2[[i]]){
                return true;
            }
        }
    }
    return false;
}
console.log(common(array1,array2))