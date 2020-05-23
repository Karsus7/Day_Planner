// .ready causes javascript to run as soon as the DOM is ready to manipulate.
$(document).ready(function () {
    // the "$" character allows the selector to find and effect HTML elements.
    // listen for save button clicks to activate function
    $(".saveBtn").on("click", function () {
        // .siblings and .parent sets DOM elements as html elements
        var time = $(this).parent().attr("id");
        var value = $(this).siblings(".description").val();


        // save written description and current time in localStorage
        localStorage.setItem(time, value);
    });

// All time related script relies in some part on the use of 'moment'
    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

        // loop over time blocks
        $(".time-block").each(function () {
// blockHour is how the function compares an hour to the currentHour from moment
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

// check if we've moved past this time
// 'remove' and add'' class in this case effect the green/red shading based on current time
// 'past', 'present', and 'future', are style id's, and effect coloration of the rows
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // this section saves content in the text areas to local storage when the button is pressed.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // display current day at the top of the page
    // Study up on moment at: https://devhints.io/moment
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});