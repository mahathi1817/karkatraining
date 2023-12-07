var diff = [22, 2, 4, 5, 6, 444, 1, 666];
function solution(a) {
    const max = Math.max.apply(null,a);
    const min = Math.min.apply(null,a);
    const diff = max-min;
    return diff
}
console.log(solution(diff))