// make sure that jquery is loaded
// alternatively position html script tags at the bottom of body
$(document).ready(function() { })

// selector jquery("h1") or $("h1") same thing
$("h1").css("color", "red");

// add event listener,
$("h1").click(function() {
    $("h1").css("color", "purple")
})

// add event listener to multiple elements
    // vanilla javascript
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        this.style.color = "purple";
    })
}
    // jQuery
    // change color of button clicked
$("button").click(function() {
    $(this).css("color", "purple")
})
    // log the keypress in console
$(document).keydown(function(event) {
    console.log(event.key)
})
// display each keypress, replacing the h1
$(document).keydown(function(event) {
    $("h1").text(event.key)
})
// $("selector").on("event_type", callbackFn)
$("h1").on("mouseover", function() {
    $(this).css("color", "black")
})

// animations
$(document).ready(function () {
    $("#myDiv").animate({ height: "200px", width: "200px" });
});












