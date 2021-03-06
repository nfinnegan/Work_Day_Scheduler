$(document).ready(function(){
var plannerTimes = [
    { hour: "9:00",
        military: 9, 
    },
    {hour: "10:00",
        military: 10,   
    },
    {hour: "11:00",
        military: 11, 
    }, 
    {hour: "12:00",
        military: 12,    
    },
    {hour: "1:00",
        military: 13, 
    },
    {hour: "2:00",
        military: 14, 
    },
    {hour: "3:00",
        military: 15, 
    },
    {hour: "4:00",
        military: 16, 
    },
    {hour: "5:00",
        military: 17, 
    },
];

//setting a variable for current time so I can compare it to each time on my planner in order to add the past,present,future classes
let currentTime = moment().format("k")
let currentTimeAsNum = Number(currentTime);


date();
//setting current day / date to display
function date(){
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(today);
};


//creating 1 set of the rows & columns needed per time block, BCS learning assistant helped me with the concept of passing el in my for each function to get the values i wanted
plannerTimes.forEach(function(el){
    let plannerRow = $("<div></div>").addClass("row justify-content-center").appendTo(".container");
    let plannerCol1 = $("<div></div>").addClass("col-sm-2 col-md-2 col-lg-2 column1").appendTo(plannerRow).text(el.hour).attr("id", el.hour);
    let plannerCol2 = $("<input type='text' name='textbox' maxlength='140'></input>").addClass("col-sm-9 col-md-9 col-lg-9 column2 inputTasks ").attr("id", el.military).appendTo(plannerRow)
    $("<i><i/>").addClass("col-sm-1 col-md-1 col-lg-1 column3 saveBtn far fa-save").appendTo(plannerRow);
    

    //adding past, present, future class for each input box based on current time

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
        if(el.hour === "9:00" || el.hour === "10:00" || el.hour === "11:00"){
           plannerCol1.text(el.hour + "AM");
            }
        else{
           plannerCol1.text(el.hour + "PM")
            }

   
}) 



//event listner for each save icon
$(document).on("click", ".saveBtn",function(event){
    let getTaskValue = $(this).siblings("input").val();//tutor assist
    let hourVal = $(this).siblings("input").attr("id")
    window.localStorage.setItem(hourVal,getTaskValue);
      
    })

//getting locally stored items and displaying them on the page    
function getStorage() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
        
        }

 getStorage()       

    }) 