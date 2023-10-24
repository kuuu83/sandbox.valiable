/**
 * const,let等の変数宣言
 */

//  var val1 = "varrrr1変数";
//  console.log(val1);

//  //var変数は上書き可能
//  val1 = "上書きできちゃったよ";
//  console.log(val1);

// //var変数を再宣言
// var val1 = "var変数を再宣言しちゃうよ"
// console.log(val1);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "旅人") => console.log(`こんにちは${name}さん！`);
// sayHello();

/**
 * スプレット構文 ...
 */
//配列の展開 頭から順に処理していく
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //分割代入
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 1000;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; //参照が引き継がれる問題。値を変更などでコピー元の配列の値まで変わってしまう
// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["ルフィ", "ゾロ", "サンジ"];
// for (let index = 0; index < nameArr.length; index++) { //従来のfor構文の例
//     console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//     return name;
// })
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr)

// const NewNameArr = nameArr.map((name) => {
//     if (name === "ルフィ") {
//         return `${name}船長`
//     } else {
//         return name
//     }
// });
// console.log(NewNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'tureです' : 'falseです';
// console.log(val1);

//toLocaleStringは数字を三桁区切りで,を入れてくれる関数
// const num = 13000;
// // console.log(num.toLocaleString());
// // typeof その変数の型が何なのかを判別してくれる
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? '100超えています!!' : '許容範囲内です';
}
console.log(checkSum(30, 78));