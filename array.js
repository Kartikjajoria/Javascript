let arr=[1,3,5,7,9,0,6,4]
let a;
do{
    a=prompt("enetr a number")
    a=Number.parseInt(a)
    arr.push(a)
} while(a!=0);
console.log(arr)