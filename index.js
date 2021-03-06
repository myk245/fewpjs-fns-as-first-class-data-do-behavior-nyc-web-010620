/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

// The greet function should take one argument, a String which specifies the 24-hour time in the format HH:MM.
// If the time is earlier than 12pm, return "Good Morning".
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".
// NOTE: The value returned from the <input> will be of type String. You’ll need to take the String of the 24 hour time 
// and convert it to a number. The split() function and parseInt() function should help.
const greet = function(timeString) {
  const timeInt = parseInt(timeString);
  if (timeInt < 12) {
    return "Good Morning"
  }; 
  if (timeInt >= 12 && timeInt <= 17) {
    return "Good Afternoon"
  }; 
  if (timeInt > 17) {
    return "Good Evening"
  }; 
};

// The displayMessage function should take one argument, a String.
// When the function runs it should update the text inside the #greeting node with the content of the first argument.
// It does not return anything.
const displayMessage = function(message) {
  const greeting = document.getElementById("greeting"); 
  greeting.innerText = message;
}; 
