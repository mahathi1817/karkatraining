let array1 = [1,2,3,4,5,6];
let array2 = [6,7,8,1,2,3];
 
let res_arr = ( array1, array2) =>{
    let new_array = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                new_array.push(array1[i]);
            }
        }
    }
    return new_array;
};
console.log("Array obtained is :");
console.log(res_arr(array1, array2));