

var eventEl = $("#event-name");

//basics first.
//Lets start with the date showing at the top of the page and worry
//about the scedule builder after
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
//complete

var time = ["5", "6", "7"];
//these 2 are test variables until I make the events a fill in option
//currently in use to make the table

function display() {
  var container = document.getElementById("container");
  var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  var thead = document.createElement("thead");

  var header = ["Time", "Event Name"];
  for (var i = 0; i < header.length; i++) {
    thead
      .appendChild(document.createElement("th"))
      .appendChild(document.createTextNode(header[i]));
  }

  var times = [
    ["5am", " "],
    ["6am", " "],
    ["7am", " "],
  ];

  for (var i = 0; i < times.length; i++) {
    var vals = times[i];
    var row = document.createElement("tr");
    for (var j = 0; j < times[i].length; j++) {
      var col = document.createElement("td");
      col.textContent = vals[j];
      row.appendChild(col);
    }
    tbody.appendChild(row);
  }

  table.appendChild(thead); //add table's headers to a header element in a table
  table.appendChild(tbody); //add table's body to body element in a table
  container.appendChild(table); //put the whole table inside "container"
}
display(); //calls function called "display"

//so we have a basic table now but I want to be able to have the
//times be constant on the left.
//I need a constant variable for time
//and then I can remove the addcontrols for the time entry
//I think I'll have to do this by making a new function before the table
//and then calling the table function at the end of it.
//I'd make an empty array and fill it by counting and
//by whatever the user fills in.
//so times would count from i starting at 5 for a 5 am schedule

//that said, I need some kinda if statement
//for if x = times to place the event variable
//with that time space.

//make plug in time / date option to type time and date
//basic function for inputing info
$("#new").click(function () {
  var addcontrols = "<tr>";
  addcontrols +=
    "<td><input type='text' name='time' placeholder='Enter Time ..'></td>";
  addcontrols +=
    "<td><input type='text' name='eventName' placeholder='Enter Event Name ..'></td>";
  addcontrols += "</tr>";
  //then append the entered info
  $("table tbody").append(addcontrols);
});

//make something selectable
//$("#events").selectable();
