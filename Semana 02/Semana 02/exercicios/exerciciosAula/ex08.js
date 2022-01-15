let line = 7;
let array =[];
let i3 = 1;


for (let i = 1; i <= line; i++) {

   for (let i2 = 0; i2 < 4; i2++) {
       array[i2] = i3++;
       array[3] = "PUM"
   }
   console.log(array);
   //console.log(`${array[0]} ${array[1]} ${array[2]} ${array[3]}`);
}