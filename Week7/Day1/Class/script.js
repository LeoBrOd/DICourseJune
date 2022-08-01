// const multiplyArr = (arr)=> {
//     let newArr=[];
//     arr.forEach((e)=>{
//       let newE =e*2;
//       newArr.push(newE)
//     });
//     return newArr;
//   }

// const map=(arr)=>{
//   arr.forEach((item,i,arr)=>{
//      arr[i]=item2
//   });
//   return arr;}
// console.log(map([1,2,3,4]));

// let arr=[1,2,3,4];
// let newArray=arr.map((item,i)=>{
//   return item*2
// })
// console.log('newArray=>',newArray);

// let user = ["john", "mary", "linda"];
// let newArray = user.map((item, i) => {
//   return item + "gmail.com";
// });
// let emails = user.map(
//   (item) => item + "@gmail.com"
// );
// console.log("newArray=>", newArray);
// console.log(emails);

//const newArr = user.map((x) => `${x}@gmail.com`);  Daniels option

// [0,1,2,3,4,5,6,7,8]
// function newArr (array){
//     const answer =[]
//     array.forEach(element => {
//         if (element>3){answer.push(element)}
//     });
// }
// newArr([0,1,2,3,4,5,6,7,8])
// console.log(answer);

// function filter(arr) {
//     const newerArr1 = [];
//     arr.forEach((e) => {
//       if (e > 3) {
//         newerArr1.push(e);
//       }
//     });
//     return newerArr1;
//   }
//   Elena Chugreeva18:48
//   const bigNum = (arr)=> {
//     let bigArr=[];
//     arr.forEach((e)=>{
//       (e > 3) && bigArr.push(e)

//     })
//     return bigArr
//   }

// Teacher
// let arr=[0,1,2,3,4,5,6,7,8];
// let filter=arr.filter((item,i)=>{1
//   return item>3
// })
// console.log('filter=>',filter);

// Teacher another example
// let arr=[0,1,2,3,4,5,6,7,8];
// let filter=arr.filter(item=>item===3)
// console.log('filter=>',filter);

//

// my option
// const users=['Tim','John','Sandy','Sarah'];
// let filter=users.filter(item=>item.includes('Sa'))
// console.log(filter);

// let saUsers = users.filter(user => user.startsWith("Sa"))

let employes = [
  { name: "John", age: 27 },
  { ame: "Anna", age: 25 },
  { name: "Mary", age: 30 },
];
let filter = employes.filter(
  (item) => item.age > 26
);
console.log(filter);

// function sum(numbers) {
//     numbers.forEach(element => {
//         element+=element
//     });
// }
// console.log(sum([1,2,3,4]));

// Elena
// let sum = 0;
// arr.forEach(e => sum+=e);

// Teacher
// let arr=[2,5,10,100];
// let sum=arr.reduce((total,item)=>{
//  return total+item
// },100)
// console.log('sum=>',sum);

let account = [
  { dollars: 2 },
  { dollars: 5 },
  { dollars: 10 },
  { dollars: 10 },
];

// My
// let sum=account.reduce((total,item) =>
//      total+item.dollars ,0
//     )
//     console.log('sum=>',sum);

const total = account.reduce((total, item) => {
  return {
    dollars: total.dollars + item.dollars,
  };
});
console.log("total=>", total);

function totalDigit(num){
    const numbers = new String(num).split('');
    let newNumbers = numbers.reduce((total,item)=>total + Number(item),0);
    return (newNumbers<10) ? newNumbers : totalDigit(newNumbers)
  }
  console.log(totalDigit(493193));
// Task
  let b = 3, d = b, u = b;

  const tree = ++d * d*b * b++ +
   + --d+ + +b-- +
   + +d*b+ +
   u
  
   console.log(tree);//163

   4 * 4 * 3 * 3 +
3 + 4 +
3 * 3 +
3

console.log((4*4*3*3)+3+4+(3*3)+3);