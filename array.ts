const numbers:number[]=[4,6,-1,1];//number
//numbers.push('1');/type safety
// const sum=numbers.reduce(function(previous,current){
//     return previous+current;
// })
const sum=numbers.reduce((previous,current)=>previous+current);
console.log(sum);
// numbers.sort(function(number1:number, number2:number){
//     return number1-number2;
// })
// console.log(numbers);
//map incresaese the number by 10
const updatedNumbers=numbers.map(function(element){
    return element+10;
});
console.log(updatedNumbers);

