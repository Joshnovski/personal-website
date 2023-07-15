// Get all elements with the class name 'LightDarkModeBoxContainer'
var lightModeElements = document.getElementsByClassName(
  "LightDarkModeBoxContainer"
);

//set state of Light/Dark Mode
var isLight = false;

// Iterate over these elements
for (var i = 0; i < lightModeElements.length; i++) {
  // Add click event listener to each 'LightDarkModeBoxContainer' element
  lightModeElements[i].addEventListener("click", function () {
    // Get all elements with the class name 'contentContainer'
    var contentElements = document.getElementsByClassName("contentContainer");

    //Check state of Light/Dark mode
    if (isLight) {
      // Iterate over these elements
      for (var j = 0; j < contentElements.length; j++) {
        // Change the properties for each 'contentContainer' element
        contentElements[j].style.backgroundColor = "white";
        // Add other properties as needed
      }
      // prepare state for switch back to light mode on next click
      isLight = false;
    } else {
      // Iterate over these elements
      for (var j = 0; j < contentElements.length; j++) {
        // Change the properties for each 'contentContainer' element
        contentElements[j].style.backgroundColor = "#282730";
        // Add other properties as needed
      }
      // prepare state for switch back to light mode on next click
      isLight = true;
    }
  });
}
