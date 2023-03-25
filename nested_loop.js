const bawah = 10
const samping = 15
const batas = 10

for (let outer = 0; outer < bawah; outer++) {
    let str = '';
    for (let inner = 0; inner < samping; inner++) {
        str = str + '*';
    }
    console.log(str);
}

console.log('\n')

for (let outer = 0; outer < bawah; outer++) {
    let str = '';
    for (let inner = 0; inner < samping; inner++) {
        str += inner <= outer ? '*' : '+';
    }
    console.log(str + ' ' + outer);
}

for (let bilangan1 = 1; bilangan1 <= batas; bilangan1++) {
    for (let bilangan2 = 1; bilangan2 <= batas; bilangan2++) {
        console.log(`${bilangan1} X ${bilangan2} = ${bilangan1 * bilangan2}`);
    }
    console.log('=============================================')
}

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [5, 6, 7];
let result = []
for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i])
        }
    }
}

console.log(result)

result = []
for (const arr1Val of arr1){
    for (const arr2Val of arr2){
        if(arr1Val === arr2Val) {
            result.push(arr1Val);
        }
    }
}

console.log(result)