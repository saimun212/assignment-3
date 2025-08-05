/**===========starting---question-----part============== */
/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here

/*===============Writing-----start-&---solution----part============ */
/*=========1st======= */
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