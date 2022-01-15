let num = [5]
let num2 = [3]

for (let i=1; i <= 10; i = i + 1 ) {
    let result = num * i
    console.log(`${num} x ${i}: ${result}`)
}
console.log("------------------------");
for (let i=1; i <= num2; i = i + 1 ) {
    let result2 = num2 * i
    console.log(`${num2} x ${i}: ${result2}`)
}
