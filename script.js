$(document).ready(dayPlanner)
date();
//var hourIndex= 0

function date(){
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(today);
    console.log("hey")
};
var plannerTimes = [9,10,11,12,1,2,3,4,5]

//looping through each time slot and creating rows/columsn
plannerTimes.forEach(dayPlanner);

//creating the rows & columns needed per time block
function dayPlanner(){

    let plannerRow = $("<div></div>").addClass("row justify-content-center").appendTo(".container");
    let plannerCol1 = $("<div></div").addClass("col-sm-2 col-md-2 col-lg-2 column1").appendTo(plannerRow);
    let plannerCol2 = $("<input type='text' name='textbox' maxlength='140'></input>").addClass("col-sm-9 col-md-9 col-lg-9 column2").appendTo(plannerRow)
    let saveBtnCol3 = $("<i><i/>").addClass("col-sm-1 col-md-1 col-lg-1 column3 saveBtn far fa-save").appendTo(plannerRow);
 }

let time = $(".column1")
plannerTimes.forEach(displayTimes);

function displayTimes(){
let i=0; 
i < plannerTimes.length; 
i++
time.text(plannerTimes[i]);
console.log(plannerTimes);
}