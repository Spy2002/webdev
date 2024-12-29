// let x = "jaisingh"
// console.log(x)
// console.log(x.toUpperCase())
// console.log(x.slice(3))
// console.log(x+" is a good boy")
// console.log(x.replace('ai',77))
// // `` called backtic like fstring in python
// // console.log(`${x} is good `)
// let x = 'carzy' ,y = 'amazing' , z = 'fire';
// let a = 'engine' ,b = 'food' , c = 'garments';
// let p = 'bros',q = 'limited' ,r = 'hub'
let t = Math.random()
console.log(t)
let first, second, third;
if (t < 0.33) {
    first = "crazy";
}
else if (t > 0.33 && t < 0.66) {
    first = 'amazing';
}
else {
    first = 'fire';
}
if (t < 0.33) {
    second = "engine";
}
else if (t > 0.33 && t < 0.66) {
    second = 'food';
}
else {
    second = 'germents';
}
if (t < 0.33) {
    third = "bros";
}
else if (t > 0.33 && t < 0.66) {
    third = 'limited';
}
else {
    third = 'hub';
}
console.log(first + second + third)