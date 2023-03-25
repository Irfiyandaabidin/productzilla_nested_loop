// 1. terdapat sebuah array seperti berikut:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// jika hasil yang perlu didapat dari penjumlahan 2 angka dari array tersebut adalah 17, berapa pasangan penjumlahan dan outputkan penjumlahannya!
// 0 + 17
// 1 + 16
// 2 + 15

// 2. ada 2 string "hello" dan "world", outputkan huruf yang sama dalam 2 string tersebut

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    let jumlah = arr[i] + arr[j];
    if (jumlah == 17) {
      console.log(`${arr[i]} + ${arr[j]}`);
      result.push([arr[i], arr[j]]);
    }
  }
}

console.log(result.length);


const hurufSama = (kata1, kata2) => {
  let result = [];
  for (let i = 0; i < kata1.length; i++) {
    for (let j = 0; j < kata2.length; j++) {
      if (kata1[i] == kata2[j]) {
        if(result.indexOf(kata1[i])){
            result.push(kata1[i]);
        }
      }
    }
  }
  return result;
};

console.log(hurufSama("hello", "world"));
