// constant for estimate approx. reading char count per minute
var charCountReading = 1500;

// select all DIVs from current page
var containers = document.getElementsByTagName("div");

// index for div with maximum text length
var maxIndex = 0;

// temporary variable for storing maximum value
var tmpMaxValue = 0;

// iterate div and try to find maximum text size
for (var i=0; i<containers.length;i++) {
    if (containers[i].innerText.length > tmpMaxValue) {
        tmpMaxValue = containers[i].innerText.length;
        maxIndex = i;
    }
}

//console.log("Max length div class name: " + containers[maxIndex].innerText);

var readingTime = Math.round(containers[maxIndex].innerText.length / charCountReading);

console.log("Reading time will take: " + readingTime + " minutes.");