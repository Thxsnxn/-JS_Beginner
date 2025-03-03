// 0.การกำหนดตัวแปร 3 แบบ
let x = 5;
const user = [];
var z = 6;

//1.การสร้างตัวแปรแล้วนำไปใช้
const name = "Pakorn";
const age = 20;
const isStd = true;
console.log(`สวัสดี, ผมชื่อ ${name}, อายุ ${age}ปี, เป็นนักเรียน : ${isStd}`);

//2.การใช้เงื่อนไข
//num คือ พารามิเตอร์ ไว้รับค่าแล้วมาทำตามเงื่อนไข
function checkNum(num) {
    if (num > 0) {
        console.log("เป็นจำนวนบวก");
    } else if (num < 0) {
        console.log("เป็นจำนวนลบ");
    } else {
        console.log("เป็น0");
    }
}
//เป็นเรียกใช้ฟังก์ชั่นและกำหนดค่าเพื่อทำตามเงื่อนไข
checkNum(6);
checkNum(-9);
checkNum(0);

// 3.1การเก็บข้อมูลเป็นArr
let numbers1 = [1,2,3,4,5];
// = 0 หมายถึงตำแหน่งที่0 ,เรากดหนดlet = iเพื่อไว้ใช้ในloopเท่านั้น
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}
// 3.2 กำหนดตัวแปรไว้นอกloop 
let numbers2 = [1,2,3,4,5];
//
let i = 0;
for (; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}
// เราก็ยังคงดึงตัวแปรมาใช้ได้ แต่อาจทำให้เกิดความสับสน
console.log(i);

// 4.ฟังก์ชั่น กับ การคำนวณ
function CalArea(width, height) {
    let area = width * height;
    console.log(`พื้นที่ : ${area}`);
}
// width = ค่าที่1 height = ค่าที่2 
CalArea(4, 5);
CalArea(7, 3);

// 5.1 js Dom 
function domfuck() {
    document.getElementById("message").textContent = "ควย!";
}

// 5.2 js Dom
function changeBackgroundColor() {
    document.body.style.background = "green";
}
// 5.3
let count = 0;
function countClicks() {
    count++;
    document.getElementById("clickCount").textContent = `จำนวนครั้ง = ${count}`;
}

// 5.4
function toggleText() { 
    const text = document.getElementById("secretText");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}