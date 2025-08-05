/*  ===================================>  problem -1  <===========================*/
/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

/*=================Result-javascript-problem-1-Answer================== */
var area = 100 / 2 ;
console.log(area);

var area = 15 / 2;
console.log(area);

var area = 2060 / 2;
console.log(area);  


/**==================================>  problem-2-<===========================--- */
/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

/*=================Result---string--Answer--2==========*/

var money = 45000;
if (money >=45000){
    console.log("Laptop");
}  else {
    console.log("Cycle");
}

var money = 10000;
if (money >=10000){
    console.log("Cycle");
}  else {
    console.log("Chocolate");
}

var money =9999;
if (money >=9999){
    console.log("Chocolate");
}  else {
    console.log("Give comfort");
}

/*==============================>   problem-3    <============================== */
/*==================problem-3-question==================== */
/** Problem -03 ( Medicine Planner ) */
var lastDay = 4 ;
//write your code here

/*==================Start---Answer-parts=================== */
/*=============first ----- output=========*/
for(var day = 1; day <=lastDay; day++){
    if (day % 3 ===0){
        console.log(day + " medicine");
    }
    else{
        console.log(day +  " rest");
    }
}

/*===============second---output================ */
var everyDay = 6;
for(var day = 1; day <=everyDay; day++){
    if (day % 3 ===0){
        console.log(day + " medicine");
    }
    else{
        console.log(day +  " rest");
    }
}


/*  ==============================>  problem -4  <============================*/
 /**===========starting---question-----part============== */
/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

/*===============Writing-----start-&---solution----part============ */
 /*====file----list ----- */
var fileList = [
    "result.pdf",
    "data.docx",
    "pdfData.jpg",
    "#exp.mp4",
    "docx.txt",
    "docx.xpdf",
    "slipdf.txt"

];
/*===========> main-part  <============== */
for (var i = 0; i < fileList.length; i++){
    fileName = fileList[i];
    if (
        fileName.startsWith("#") ||
        fileName.endsWith(".pdf") ||
        fileName.endsWith(".docx")
    ){
        console.log(fileName + " =>Store")
    }
    else{
        console.log(fileName + " =>Delete")
    }
} 

/*  =========================>  problem -5  <============================*/

/**===========starting---question-----part============== */
/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

/*=====starting--answer-part-=========== */
/*============> 1st-parson-id   <=========== */
var email = student.name + student.roll + "" + student.department + "@ph.ac.bd";
console.log(email);

/*============> 2nd-parson-id   <=========== */
var student= { name: "monu" , roll:99 ,department: "eee" };
var email = student.name + student.roll + "" + student.department + "@ph.ac.bd";
console.log(email);


/*============> 3rd-parson-id   <=========== */
var student= { name: "mewo" , roll:96 ,department: "cse" };
var email = student.name + student.roll + "" + student.department + "@ph.ac.bd";
console.log(email);



/*  =========================>  problem -6  <============================*/
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




