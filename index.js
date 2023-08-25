
// 1 :
// print contohObj dengan key name ambil dari index 2 contohArr
// print contohObj dengan key age ambil dari index 3 contohArr
// print contohObj dengan key id ambil dari index 1 contohArr




const contohArray = [1, "imam", 28, 2, "alip", 21]

const contohObj = {
    name: contohArray[1],
    age: contohArray[2],
    id: contohArray[0]
  };

console.log(contohObj.name),
console.log(contohObj.age),
console.log(contohObj.id),

// ini udah, insyallah bener hehe :D

// 2 :
// - kalian tambah data kalian di arr + 1 temen kalian juga
// - menggunakan looping, di dalam nya check condisi pake if utk print contohObj key id yang value nya dari index 0,3,6

console.log(`=============================`)

for (let i = 0; i < contohArray.length; i++) {
    if (i === 0 || i === 3 || i === 6) {
        console.log(contohArray)
    }
}

//Belum Selesai dilanjut besok, Logikanya blm nyampe hehe :D

// 3
// masukkan data object dengan arr.push (Nirwana)
// tapi hanya masukkan data yang bernama imam, hafizh, syifa (pake IF dari hafizh no 2) ke dalam array kosong
// dari array kosong yang udah di masukkan data diatas, tapi cuman print yang age nya dibawah 28 dan id nya  (loping dan if2
// let data = [];

const obj1 = { name: 'Imam', age: 28, id: 1 };
const obj2 = { name: 'Hafizh', age: 20, id: 2 };
const obj4 = { name: 'Ale', age: 22, id: 3 };
const obj5 = { name: 'Dimas', age: 23, id: 4 };
const obj6 = { name: 'Adella', age: 25, id: 5 };
const obj7 = { name: 'Syifa', age: 21, id: 6 };

let data = [];

//Belum Selesai dilanjut besok, Logikanya blm nyampe hehe :D