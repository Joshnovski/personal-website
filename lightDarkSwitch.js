// Get all elements with the class name 'LightDarkModeBoxContainer'
var lightModeElements = document.getElementsByClassName(
  "LightDarkModeBoxContainer"
);

//set state of Light/Dark Mode
var isLight = false;

for (var i = 0; i < lightModeElements.length; i++) {
  lightModeElements[i].addEventListener("click", function () {
    var contentContainer = document.getElementsByClassName("contentContainer");
    var headerContent = document.getElementsByClassName("headerContent");
    var footer = document.getElementsByTagName("footer");
    var nav = document.getElementsByTagName("nav");
    var boxTL = document.getElementsByClassName("boxTL");
    var boxTR = document.getElementsByClassName("boxTR");
    var boxBR = document.getElementsByClassName("boxBR");

    var aboutMeImg = document.querySelector('.aboutMeBackground');
    var foregroundImg = document.querySelector('.foreground');
    var backgroundImg = document.querySelector('.background');
    var skyImg = document.querySelector('.sky');

    var projectImgLeft = document.getElementsByClassName("projectImageLeft");
    var projectImgRight = document.getElementsByClassName("projectImageRight");

    //Check state of Light/Dark mode
    if (isLight) {

      for (var j = 0; j < contentContainer.length; j++) {
        contentContainer[j].style.backgroundColor = "white";
        contentContainer[j].style.color = "#282730";
      }

      for (var j = 0; j < headerContent.length; j++) {
        headerContent[j].style.backgroundColor = "white";
      }

      for (var j = 0; j < footer.length; j++) {
        footer[j].style.backgroundColor = "#517FB5";
      }

      for (var j = 0; j < nav.length; j++) {
        nav[j].style.backgroundColor = "white";
        nav[j].style.color = "#282730";
      }

      for (var j = 0; j < boxTL.length; j++) {
        boxTL[j].style.top = "0";
        boxTL[j].style.backgroundColor = "#7EC3F4";
      }

      for (var j = 0; j < boxTR.length; j++) {
        boxTR[j].style.backgroundColor = "#247952";
      }

      for (var j = 0; j < boxBR.length; j++) {
        boxBR[j].style.backgroundColor = "#003C30";
      }

      foregroundImg.src = 'assets/DayForest.png';
      aboutMeImg.src = 'assets/DayForest.png';
      aboutMeImg.style.backgroundColor = '#005335';
      backgroundImg.src = 'assets/DayMountain.png';
      skyImg.src = 'assets/DaySky.png';

      document.documentElement.style.setProperty('--mask-color', 'rgba(0, 0, 0, 0.4)');

      for (var j = 0; j < projectImgLeft.length; j++) {
        projectImgLeft[j].style.backgroundColor = "#236e4b";
      }

      for (var j = 0; j < projectImgRight.length; j++) {
        projectImgRight[j].style.backgroundColor = "#6DA0DA";
      }

      // prepare state for switch back to light mode on next click
      isLight = false;

    } else {

      for (var j = 0; j < contentContainer.length; j++) {
        contentContainer[j].style.backgroundColor = "#282730";
        contentContainer[j].style.color = "white";
      }

      for (var j = 0; j < headerContent.length; j++) {
        headerContent[j].style.backgroundColor = "#282730";
      }

      for (var j = 0; j < footer.length; j++) {
        footer[j].style.backgroundColor = "#5C3D5E";
      }

      for (var j = 0; j < nav.length; j++) {
        nav[j].style.backgroundColor = "#282730";
        nav[j].style.color = "white";
      }

      for (var j = 0; j < boxTL.length; j++) {
        boxTL[j].style.top = "50%";
        boxTL[j].style.backgroundColor = "#694DA3";       
      }

      for (var j = 0; j < boxTR.length; j++) {
        boxTR[j].style.backgroundColor = "#4D52CC";
      }

      for (var j = 0; j < boxBR.length; j++) {
        boxBR[j].style.backgroundColor = "#343372";
      }

      for (var j = 0; j < foregroundImg.length; j++) {
        foregroundImg[j].src = 'assets/NightForest.png';
    }

      foregroundImg.src = 'assets/NightForest.png';
      aboutMeImg.src = 'assets/NightForest.png';
      aboutMeImg.style.backgroundColor = '#1F2C33';
      backgroundImg.src = 'assets/NightMountain.png';
      skyImg.src = 'assets/NightSky.png';

      document.documentElement.style.setProperty('--mask-color', 'rgba(0, 0, 0, 0)');

      for (var j = 0; j < projectImgLeft.length; j++) {
        projectImgLeft[j].style.backgroundColor = "#2C4344";
      }

      for (var j = 0; j < projectImgRight.length; j++) {
        projectImgRight[j].style.backgroundColor = "#5C3D5E";
      }

      // prepare state for switch back to light mode on next click
      isLight = true;

    }
  });
}
