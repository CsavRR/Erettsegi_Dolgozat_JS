import fs from 'fs'

//1.
const temp = fs.readFileSync("uvegek.txt", {encoding: "UTF-8"}).split(', ');
const arr = temp.map(e => +e);
console.log(arr)
//2.
console.log('2.feladat')
let l = 35;
if (l > 0 && l < 201){
    console.log(`Mari néni lekvárja (dl): ${l}`)
}

//3.
console.log('3. feladat')
let legnagyobb = 0;
let index = arr[0];

for(let i = 0; i < arr.length; i++){
    if (legnagyobb < arr[i]){
        legnagyobb = arr[i];
        index = i;
    }
}
console.log(`A legnagyobb üveg: ${legnagyobb} dl és ${index + 1}. a sorban.`);

//4.
console.log('4. feladat')
for (let i = 0; i < arr.length; i++){
    l -= arr[i];
}
if (l <= 0){
    console.log('Elegendő üveg volt.')
} else {
    console.log('Maradt lekvár.')
}