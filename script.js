$(document).ready()
date();
var hourIndex= 0
var plannerTimes = [
    { hour: 9,
      id: 1,  
    },
    {hour: 10,
     id: 2,   
    },
    {hour: 11,
     id: 3, 
    }, 
    {hour: 12,
     id: 4,    
    },
    {hour: 1,
     id: 5, 
    },
    {hour: 2,
     id: 6, 
    },
    {hour: 3,
     id: 7, 
    },
    {hour: 4,
     id: 8, 
    },
    {hour: 5,
     id: 9, 
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
    let currentTime = moment().format("h:mm")
    console.log(currentTime);
    let hourVal =plannerCol1.text()
        if(currentTime > hourVal){
            $("input").addClass("past")
        }
        else if (currentTime == hourVal){
            $("input").addClass("present")
        }


        if(el.hour === 9 || el.hour === 10 || el.hour === 11){
           var timeCol = plannerCol1.text(el.hour + "AM");
    
            }
        else{
           var timeCol = plannerCol1.text(el.hour + "PM")
            }

        
    //    console.log(currentTime);
    //    let hourVal =plannerCol1.text()
    //     if(currentTime > hourVal){
    //     $("input").addClass("past")
    //      }

    })        
//event listener for save icon
// let currentTime = moment().format("h:mm")

// function timeCheck(){
//     if(currentTime )
// }

    $("i").on("click",saveIcon)


    function saveIcon(event){
    event.preventDefault();
    plannerTaskValue = plannerTasks.value;
    let tasksList = JSON.parse(localStorage.getItem("taskItems")) || []
    tasksList.push(plannerTaskValue);
    let newTaskList = JSON.stringify(tasksList)
    localStorage.setItem("taskItems",newTaskList);
    plannerTasks.text(newTaskList);
     }


 






 
