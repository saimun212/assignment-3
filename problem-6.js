/**===========starting---question-----part============== */
/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here

/*=====starting--answer-part-=========== */
/*===================> 1st--part   <================= */
var CurrentSalary = startingSalary;
for (var i = 1 ; i <= experience; i++){
    CurrentSalary += CurrentSalary *0.05;
}
CurrentSalary = CurrentSalary.toFixed(2);
console.log(startingSalary);
console.log(experience);
console.log(CurrentSalary);

/*===================> 2nd--part   <================= */
var experience = 3;
var startingSalary = 15000;

var CurrentSalary = startingSalary;
for (var i = 1 ; i <= experience; i++){
    CurrentSalary += CurrentSalary *0.05;
}
CurrentSalary = CurrentSalary.toFixed(2);
console.log(startingSalary);
console.log(experience);
console.log(CurrentSalary);

/*===================> 3rd--part   <================= */

var experience = 40;
var startingSalary = 30000;

var CurrentSalary = startingSalary;
for (var i = 1 ; i <= experience; i++){
    CurrentSalary += CurrentSalary *0.05;
}
CurrentSalary = CurrentSalary.toFixed(2);
console.log(startingSalary);
console.log(experience);
console.log(CurrentSalary);
/*=============================>  END-OFF-ALL-PART <======================= */