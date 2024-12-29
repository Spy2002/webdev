// // var y = 1
// function fac(x){
// // let  i = 1
// var y = 1
// // while(i<=x) {
// //    y = y*i
// //    return y 
// // }
// for (let i = 1; i <= x; i++){
//     y = y*i   
// }
// return y
// }

// a=fac(5)
// console.log(a)
let a = [1,2,3,4,5,6,7]
let x = []
for(i=0;i<a.length,i = i+1;){
    const y = a[i]
    x.push(y**2)
}
console.log(x)