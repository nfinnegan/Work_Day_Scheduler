$(document).ready(date)
var plannerIndex= 0
var plannerTimes = [
    { hour: 9,
        military: 9, 
    },
    {hour: 10,
        military: 10,   
    },
    {hour: 11,
        military: 11, 
    }, 
    {hour: 12,
        military: 12,    
    },
    {hour: 1,
        military: 13, 
    },
    {hour: 2,
        military: 14, 
    },
    {hour: 3,
        military: 15, 
    },
    {hour: 4,
        military: 16, 
    },
    {hour: 5,
        military: 17, 
    },
];
let saveToDoItem = $(".saveBtn");
let plannerTasks = $(".inputTasks");
let currentTime = moment().format("k")
let currentTimeAsNum = Number(currentTime);
//let timeValue = plannerTimes.hour
//console.log(timeValue)


function date(){
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(today);
};

for (i=0; i < localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key + ": " + value)
    $(timeValue).val(localStorage.getItem(value))
    
}



//creating 1 set of the rows & columns needed per time block
plannerTimes.forEach(function(el){
    let plannerRow = $("<div></div>").addClass("row justify-content-center").appendTo(".container");
    let plannerCol1 = $("<div></div>").addClass("col-sm-2 col-md-2 col-lg-2 column1").appendTo(plannerRow).text(el.hour);
    let plannerCol2 = $("<input type='text' name='textbox' maxlength='140'></input>").addClass("col-sm-9 col-md-9 col-lg-9 column2 inputTasks ").attr("id", el.military).appendTo(plannerRow)
    let saveBtnCol3 = $("<i><i/>").addClass("col-sm-1 col-md-1 col-lg-1 column3 saveBtn far fa-save").appendTo(plannerRow);
    

    //adding past, present, future class for proper input box coloring based on current time

        if (currentTimeAsNum > el.military) {
            plannerCol2.addClass("past");
        }
        else if (currentTimeAsNum < el.military) {
            plannerCol2.addClass("future");
        }
        else  {
            plannerCol2.addClass("present");
        };
        
        
        //adding AM or PM respectively
        if(el.hour === 9 || el.hour === 10 || el.hour === 11){
           var timeCol = plannerCol1.text(el.hour + "AM");
            }
        else{
           var timeCol = plannerCol1.text(el.hour + "PM")
            }




   
}) 



//event listner for each save icon
$(document).on("click", ".saveBtn",function(event){
    let getTaskValue = $(this).siblings("input").val();//tutor assist
    let hourVal = $(this).siblings("div").text();
    window.localStorage.setItem(hourVal,getTaskValue);
      
    })