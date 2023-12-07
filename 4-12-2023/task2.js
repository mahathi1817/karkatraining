let arr = [1,2,3,1,4,5,2,6,7,3,8];
 
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
 
console.log(removeDuplicates(arr));