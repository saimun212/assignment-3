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