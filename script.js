$(document).ready()
date();
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

function date(){
    today = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(today);
    //console.log("hey")
};



//creating 1 set of the rows & columns needed per time block
plannerTimes.forEach(function(el){
  //  console.log(el.hour);
    let plannerRow = $("<div></div>").addClass("row justify-content-center").appendTo(".container");
    let plannerCol1 = $("<div></div>").addClass("col-sm-2 col-md-2 col-lg-2 column1").appendTo(plannerRow).text(el.hour);
    let plannerCol2 = $("<input type='text' name='textbox' maxlength='140'></input>").addClass("col-sm-9 col-md-9 col-lg-9 column2 inputTasks").appendTo(plannerRow)
    let saveBtnCol3 = $("<i><i/>").addClass("col-sm-1 col-md-1 col-lg-1 column3 saveBtn far fa-save").appendTo(plannerRow);
    let currentTime = moment().format("k:mm")
    //console.log(currentTime);

    //adding past, present, future class for proper input box coloring based on current time
     console.log(el.military)
        if (currentTime > el.military) {
            $("input").addClass("past");
            }
        else if (currentTime < el.military) {
            $("input").addClass("future");
            $("input").removeClass("past");
            }
        else if (currentTime === el.military) {
            $("input").addClass("present");
            $("input").removeClass("past future");
            }
        
        //adding AM or PM respectively
        if(el.hour === 9 || el.hour === 10 || el.hour === 11){
           var timeCol = plannerCol1.text(el.hour + "AM");
    
            }
        else{
           var timeCol = plannerCol1.text(el.hour + "PM")
            }

        //saving to localStorage
        $(".saveBtn").on("click",saveIcon)



            function saveIcon(event){
            event.preventDefault();
            console.log(this);
            var hourTasks = {
                hour: hourVal,
                userTask: plannerTasks.val(),
                }
        
            let tasksList = JSON.parse(localStorage.getItem("taskItems")) || []
            tasksList.push(hourTasks);
            let newTaskList = JSON.stringify(tasksList)
            localStorage.setItem("taskItems",newTaskList);
            plannerTasks.text(newTaskList);

            }

    })        
//event listener for save icon
// let currentTime = moment().format("h:mm")

// function timeCheck(){
//     if(currentTime )
// }

 






 
