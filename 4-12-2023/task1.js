/*To print the array in reverse order without using inbuilt function*/
let org_array=[1,2,3,4,5];
let rev_array=[];
for (let i = org_array.length - 1; i >= 0; i--) {
    rev_array.push(org_array[i]);
}
console.log(rev_array);
