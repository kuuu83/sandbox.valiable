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
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 1000;
console.log(arr4);
console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4; //参照が引き継がれる問題。値を変更などでコピー元の配列の値まで変わってしまう
// arr8[0] = 100;
// console.log(arr4);
// console.log(arr8);
