function newItem() {
  //initialize variables
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  //create condition and feedback
  if (inputValue === "") {
    alert("Please add an item to the list");
  } else {
    $("#list").append(li);
  }
  //ATTEMPT TO SUBMIT WITH ENTER KEY. DID NOT WORK.
  //inputValue.keyup(function(e){
  //let enter = e.which;
  //if(enter === 13){
  //e.preventDefault();
  //list.append(li);
}
//create crossout function
function crossOut() {
  li.toggleClass("strike");
}
//add event to cross out list item
li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});

//create delete crossOutButton
let crossOutButton = $("<crossOutButton></crossOutButton>");
//add it to document
crossOutButton.append(document.createTextNode("X"));
// add to list items
li.append(crossOutButton);
//create cross out event
crossOutButton.on("click", deleteListItem);
//not sure why this function is after the event
function deleteListItem() {
  li.addClass("delete");
}
//I didn't change the sort item code, it looks like jquery
$("#list").sortable();
