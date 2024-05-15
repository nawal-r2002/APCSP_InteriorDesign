//When Next Button is clicked (Partner B)
onEvent("Nextbutton","click", function(){
  setScreen("Color_Choices_Screen");
});
//When Home Buttons are clicked (Partner B)
onEvent("Homebutton", "click", function(){
  setScreen("Welcome_Screen");
});
onEvent("Homebutton#2", "click", function(){
  setScreen("Welcome_Screen");
});
//When Other Buttons are clicked on Screens
onEvent("HelpButton", "click", function() {
  setScreen("Help_Screen");
});
onEvent("MoreOptionsButton", "click", function() {
  setScreen("Stores_Screen");
});
//When Back Buttons are clicked (Partner A)
onEvent("Backbutton#1", "click", function() {
  setScreen("Welcome_Screen");
});
onEvent("Backbutton#2", "click", function() {
  setScreen("Color_Choices_Screen");
});
onEvent("Backbutton#3", "click", function() {
  setScreen("Color_Choices_Screen");
});
onEvent("Backbutton#4", "click", function() {
  setScreen("Color_Choices_Screen");
});
onEvent("Backbutton#5", "click", function() {
  setScreen("Color_Choices_Screen");
});
onEvent("Backbutton#6", "click", function() {
  setScreen("Color_Choices_Screen");
});
onEvent("Backbutton#7", "click", function() {
  setScreen("Color_Choices_Screen");
});
//When Color Buttons are Clicked (Partner A)
onEvent("ColorRed", "click", function() {
  setScreen("Interior_Design_Red_Screen");
});
onEvent("ColorHunterGreen", "click", function() {
  setScreen("Interior_Design_Green_Screen");
});
onEvent("ColorDarkBlue", "click", function() {
  setScreen("Interior_Design_Blue_Screen");
});
onEvent("ColorLightYellow", "click", function() {
  setScreen("Interior_Design_Yellow_Screen");
});
onEvent("ColorGrey", "click", function() {
  setScreen("Interior_Design_Grey_Screen");
});
onEvent("ColorLightPink", "click", function() {
  setScreen("Interior_Design_Pink_Screen");
});
//Setting of Interior Design Screen When Color Red is clicked (Partner B)
function RedElementsHidden() {
  hideElement("Floor#1_Red");
  hideElement("Floor#2_Red");
  hideElement("WallPaint#1_Red");
  hideElement("WallPaint#2_Red");
  hideElement("WallPaint#3_Red");
  hideElement("Cabinets#1_Red");
  hideElement("Cabinets#2_Red");
  hideElement("CounterTops#1_Red");
  hideElement("CounterTops#2_Red");
}
function Image1Coordinates_Red(){
  var x1 = getXPosition("Floor#1_Red");
  var y1 = getYPosition("Floor#1_Red");
  if (getText("Interior_Dropdown#1") == "Wall Paint"){
    setPosition("WallPaint#1_Red", x1, y1);
  } else if(getText("Interior_Dropdown#1") == "Counter-Tops"){
    setPosition("CounterTops#1_Red", x1, y1);
  } else if(getText("Interior_Dropdown#1")== "Cabinets"){
    setPosition("Cabinets#1_Red", x1, y1);
  }
}
function Image2Coordinates_Red(){
  var x2 = getXPosition("Floor#2_Red");
  var y2 = getYPosition("Floor#2_Red");
  if (getText("Interior_Dropdown#1") == "Wall Paint"){
    setPosition("WallPaint#2_Red", x2, y2);
  } else if(getText("Interior_Dropdown#1") == "Counter-Tops"){
    setPosition("CounterTops#2_Red", x2, y2);
  } else if(getText("Interior_Dropdown#1")== "Cabinets"){
    setPosition("Cabinets#2_Red", x2, y2);
  }
}
onEvent("Interior_Dropdown#1", "change", function() {
  if(getText("Interior_Dropdown#1") == "Floor") {
    RedElementsHidden();
    showElement("Floor#1_Red");
    showElement("Floor#2_Red");
  }
});
onEvent("Interior_Dropdown#1", "change", function() {
  if(getText("Interior_Dropdown#1") == "Wall Paint") {
    RedElementsHidden();
    showElement("WallPaint#1_Red");
    showElement("WallPaint#2_Red");
    showElement("WallPaint#3_Red");
    Image1Coordinates_Red();
    Image2Coordinates_Red();
  }
});
onEvent("Interior_Dropdown#1", "change", function() {
  if(getText("Interior_Dropdown#1") == "Cabinets") {
    RedElementsHidden();
    showElement("Cabinets#1_Red");
    showElement("Cabinets#2_Red");
    Image1Coordinates_Red();
    Image2Coordinates_Red();
  }
});
onEvent("Interior_Dropdown#1", "change", function() {
  if(getText("Interior_Dropdown#1") == "Counter-Tops") {
    RedElementsHidden();
    showElement("CounterTops#1_Red");
    showElement("CounterTops#2_Red");
    Image1Coordinates_Red();
    Image2Coordinates_Red();
  }
});
onEvent("Interior_Dropdown#1", "change", function() {
  if(getText("Interior_Dropdown#1") == "Interior Design Options") {
    RedElementsHidden();
  }
});
//Setting of Interior Design Screen When Color Green is clicked (Partner B)
function GreenElementsHidden() {
  hideElement("WallPaint#1_Green");
  hideElement("WallPaint#2_Green");
  hideElement("Floor#1_Green");
  hideElement("Floor#2_Green");
  hideElement("CounterTops#1_Green");
  hideElement("CounterTops#2_Green");
  hideElement("CounterTops#3_Green");
  hideElement("Cabinets#1_Green");
  hideElement("Cabinets#2_Green");
}
function Image1Coordinates_Green(){
  var x1 = getXPosition("WallPaint#1_Green");
  var y1 = getYPosition("WallPaint#1_Green");
  if (getText("Interior_Dropdown#2") == "Floor"){
    setPosition("Floor#1_Green", x1, y1);
  } else if(getText("Interior_Dropdown#2") == "Counter-Tops"){
    setPosition("CounterTops#1_Green", x1, y1);
  } else if(getText("Interior_Dropdown#2")== "Cabinets"){
    setPosition("Cabinets#1_Green", x1, y1);
  }
}
function Image2Coordinates_Green(){
  var x2 = getXPosition("WallPaint#2_Green");
  var y2 = getYPosition("WallPaint#2_Green");
  if (getText("Interior_Dropdown#2") == "Floor"){
    setPosition("Floor#2_Green", x2, y2);
  } else if(getText("Interior_Dropdown#2") == "Counter-Tops"){
    setPosition("CounterTops#2_Green", x2, y2);
  } else if(getText("Interior_Dropdown#2")== "Cabinets"){
    setPosition("Cabinets#2_Green", x2, y2);
  }
}
onEvent("Interior_Dropdown#2", "change", function() {
  if(getText("Interior_Dropdown#2") == "Floor") {
    GreenElementsHidden();
    showElement("Floor#1_Green");
    showElement("Floor#2_Green");
    Image1Coordinates_Green();
    Image2Coordinates_Green();
  }
});
onEvent("Interior_Dropdown#2", "change", function() {
  if(getText("Interior_Dropdown#2") == "Wall Paint") {
    GreenElementsHidden();
    showElement("WallPaint#1_Green");
    showElement("WallPaint#2_Green");
  }
});
onEvent("Interior_Dropdown#2", "change", function() {
  if(getText("Interior_Dropdown#2") == "Cabinets") {
    GreenElementsHidden();
    showElement("Cabinets#1_Green");
    showElement("Cabinets#2_Green");
    Image1Coordinates_Green();
    Image2Coordinates_Green();
  }
});
onEvent("Interior_Dropdown#2", "change", function() {
  if(getText("Interior_Dropdown#2") == "Counter-Tops") {
    GreenElementsHidden();
    showElement("CounterTops#1_Green");
    showElement("CounterTops#2_Green");
    showElement("CounterTops#3_Green");
    Image1Coordinates_Green();
    Image2Coordinates_Green();
    setPosition("CounterTops#3_Green", 215, 80);
  }
});
onEvent("Interior_Dropdown#2", "change", function() {
  if(getText("Interior_Dropdown#2") == "Interior Design Options") {
    GreenElementsHidden();
  }
});
//Setting of Interior Design Screen When Color Blue is clicked (Partner B)
function BlueElementsHidden() {
  hideElement("WallPaint#1_Blue");
  hideElement("WallPaint#2_Blue");
  hideElement("Cabinets#1_Blue");
  hideElement("Cabinets#2_Blue");
  hideElement("CounterTops#1_Blue");
  hideElement("CounterTops#2_Blue");
  hideElement("Floor#1_Blue");
  hideElement("Floor#2_Blue");
}
function Image1Coordinates_Blue(){
  var x1 = getXPosition("WallPaint#1_Blue");
  var y1 = getYPosition("WallPaint#1_Blue");
  if (getText("Interior_Dropdown#3") == "Floor"){
    setPosition("Floor#1_Blue", x1, y1);
  } else if(getText("Interior_Dropdown#3") == "Counter-Tops"){
    setPosition("CounterTops#1_Blue", x1, y1);
  } else if(getText("Interior_Dropdown#3")== "Cabinets"){
    setPosition("Cabinets#1_Blue", x1, y1);
  }
}
function Image2Coordinates_Blue(){
  var x2 = getXPosition("WallPaint#2_Blue");
  var y2 = getYPosition("WallPaint#2_Blue");
  if (getText("Interior_Dropdown#3") == "Floor"){
    setPosition("Floor#2_Blue", x2, y2);
  } else if(getText("Interior_Dropdown#3") == "Counter-Tops"){
    setPosition("CounterTops#2_Blue", x2, y2);
  } else if(getText("Interior_Dropdown#3")== "Cabinets"){
    setPosition("Cabinets#2_Blue", x2, y2);
  }
}
onEvent("Interior_Dropdown#3", "change", function() {
  if(getText("Interior_Dropdown#3") == "Floor") {
    BlueElementsHidden();
    showElement("Floor#1_Blue");
    showElement("Floor#2_Blue");
    Image1Coordinates_Blue();
    Image2Coordinates_Blue();
  }
});
onEvent("Interior_Dropdown#3", "change", function() {
  if(getText("Interior_Dropdown#3") == "Wall Paint") {
    BlueElementsHidden();
    showElement("WallPaint#1_Blue");
    showElement("WallPaint#2_Blue");
  }
});
onEvent("Interior_Dropdown#3", "change", function() {
  if(getText("Interior_Dropdown#3") == "Cabinets") {
    BlueElementsHidden();
    showElement("Cabinets#1_Blue");
    showElement("Cabinets#2_Blue");
    Image1Coordinates_Blue();
    Image2Coordinates_Blue();
  }
});
onEvent("Interior_Dropdown#3", "change", function() {
  if(getText("Interior_Dropdown#3") == "Counter-Tops") {
    BlueElementsHidden();
    showElement("CounterTops#1_Blue");
    showElement("CounterTops#2_Blue");
    Image1Coordinates_Blue();
    Image2Coordinates_Blue();
  }
});
onEvent("Interior_Dropdown#3", "change", function() {
  if(getText("Interior_Dropdown#3") == "Interior Design Options") {
    BlueElementsHidden();
  }
});
//Setting of Interior Design Screen When Color Yellow is clicked (Partner A)
function YellowElementsHidden() {
  hideElement("WallPaint#1_Yellow");
  hideElement("WallPaint#2_Yellow");
  hideElement("Floor#1_Yellow");
  hideElement("Floor#2_Yellow");
  hideElement("CounterTops#1_Yellow");
  hideElement("CounterTops#2_Yellow");
  hideElement("Cabinets#1_Yellow");
  hideElement("Cabinets#2_Yellow");
}
function Image1Coordinates_Yellow(){
  var x1 = getXPosition("WallPaint#1_Yellow");
  var y1 = getYPosition("WallPaint#1_Yellow");
  if (getText("Interior_Dropdown#4") == "Floor"){
    setPosition("Floor#1_Yellow", x1, y1);
  } else if(getText("Interior_Dropdown#4") == "Counter-Tops"){
    setPosition("CounterTops#1_Yellow", x1, y1);
  } else if(getText("Interior_Dropdown#4")== "Cabinets"){
    setPosition("Cabinets#1_Yellow", x1, y1);
  }
}
function Image2Coordinates_Yellow(){
  var x2 = getXPosition("WallPaint#2_Yellow");
  var y2 = getYPosition("WallPaint#2_Yellow");
  if (getText("Interior_Dropdown#4") == "Floor"){
    setPosition("Floor#2_Yellow", x2, y2);
  } else if(getText("Interior_Dropdown#4") == "Counter-Tops"){
    setPosition("CounterTops#2_Yellow", x2, y2);
  } else if(getText("Interior_Dropdown#4")== "Cabinets"){
    setPosition("Cabinets#2_Yellow", x2, y2);
  }
}
onEvent("Interior_Dropdown#4", "change", function() {
  if(getText("Interior_Dropdown#4") == "Floor") {
    YellowElementsHidden();
    showElement("Floor#1_Yellow");
    showElement("Floor#2_Yellow");
    Image1Coordinates_Yellow();
    Image2Coordinates_Yellow();
  }
});
onEvent("Interior_Dropdown#4", "change", function() {
  if(getText("Interior_Dropdown#4") == "Wall Paint") {
    YellowElementsHidden();
    showElement("WallPaint#1_Yellow");
    showElement("WallPaint#2_Yellow");
  }
});
onEvent("Interior_Dropdown#4", "change", function() {
  if(getText("Interior_Dropdown#4") == "Cabinets") {
    YellowElementsHidden();
    showElement("Cabinets#1_Yellow");
    showElement("Cabinets#2_Yellow");
    Image1Coordinates_Yellow();
    Image2Coordinates_Yellow();
  }
});
onEvent("Interior_Dropdown#4", "change", function() {
  if(getText("Interior_Dropdown#4") == "Counter-Tops") {
    YellowElementsHidden();
    showElement("CounterTops#1_Yellow");
    showElement("CounterTops#2_Yellow");
    Image1Coordinates_Yellow();
    Image2Coordinates_Yellow();
  }
});
onEvent("Interior_Dropdown#4", "change", function() {
  if(getText("Interior_Dropdown#4") == "Interior Design Options") {
    YellowElementsHidden();
  }
});
//Setting of Interior Design Screen When Color Grey is clicked (Partner A)
function GreyElementsHidden() {
  hideElement("WallPaint#1_Grey");
  hideElement("WallPaint#2_Grey");
  hideElement("Cabinets#1_Grey");
  hideElement("Cabinets#2_Grey");
  hideElement("Floor#1_Grey");
  hideElement("Floor#2_Grey");
  hideElement("CounterTops#1_Grey");
  hideElement("CounterTops#2_Grey");
}
function Image1Coordinates_Grey(){
  var x1 = getXPosition("WallPaint#1_Grey");
  var y1 = getYPosition("WallPaint#1_Grey");
  if (getText("Interior_Dropdown#5") == "Floor"){
    setPosition("Floor#1_Grey", x1, y1);
  } else if(getText("Interior_Dropdown#5") == "Counter-Tops"){
    setPosition("CounterTops#1_Grey", x1, y1);
  } else if(getText("Interior_Dropdown#5")== "Cabinets"){
    setPosition("Cabinets#1_Grey", x1, y1);
  }
}
function Image2Coordinates_Grey(){
  var x2 = getXPosition("WallPaint#2_Grey");
  var y2 = getYPosition("WallPaint#2_Grey");
  if (getText("Interior_Dropdown#5") == "Floor"){
    setPosition("Floor#2_Grey", x2, y2);
  } else if(getText("Interior_Dropdown#5") == "Counter-Tops"){
    setPosition("CounterTops#2_Grey", x2, y2);
  } else if(getText("Interior_Dropdown#5")== "Cabinets"){
    setPosition("Cabinets#2_Grey", x2, y2);
  }
}
onEvent("Interior_Dropdown#5", "change", function() {
  if(getText("Interior_Dropdown#5") == "Floor") {
    GreyElementsHidden();
    showElement("Floor#1_Grey");
    showElement("Floor#2_Grey");
  Image1Coordinates_Grey();
  Image2Coordinates_Grey();
  }
});
onEvent("Interior_Dropdown#5", "change", function() {
  if(getText("Interior_Dropdown#5") == "Wall Paint") {
    GreyElementsHidden();
    showElement("WallPaint#1_Grey");
    showElement("WallPaint#2_Grey");
  }
});
onEvent("Interior_Dropdown#5", "change", function() {
  if(getText("Interior_Dropdown#5") == "Cabinets") {
    GreyElementsHidden();
    showElement("Cabinets#1_Grey");
    showElement("Cabinets#2_Grey");
    Image1Coordinates_Grey();
    Image2Coordinates_Grey();
  }
});
onEvent("Interior_Dropdown#5", "change", function() {
  if(getText("Interior_Dropdown#5") == "Counter-Tops") {
    GreyElementsHidden();
    showElement("CounterTops#1_Grey");
    showElement("CounterTops#2_Grey");
    Image1Coordinates_Grey();
    Image2Coordinates_Grey();
  }
});
onEvent("Interior_Dropdown#5", "change", function() {
  if(getText("Interior_Dropdown#5") == "Interior Design Options") {
    GreyElementsHidden();
  }
});
//Setting of Interior Design Screen When Color Light Pink is clicked (Partner A)
function LightPinkElementsHidden() {
  hideElement("WallPaint#1_Pink");
  hideElement("WallPaint#2_Pink");
  hideElement("Cabinets#1_Pink");
  hideElement("Cabinets#2_Pink");
  hideElement("CounterTops#1_Pink");
  hideElement("CounterTops#2_Pink");
  hideElement("CounterTops#3_Pink");
  hideElement("Floor#1_Pink");
}
function Image1Coordinates_Pink(){
  var x1 = getXPosition("WallPaint#1_Pink");
  var y1 = getYPosition("WallPaint#1_Pink");
  if (getText("Interior_Dropdown#6") == "Floor"){
    setPosition("Floor#1_Pink", x1, y1);
  } else if(getText("Interior_Dropdown#6") == "Counter-Tops"){
    setPosition("CounterTops#1_Pink", x1, y1);
  } else if(getText("Interior_Dropdown#6")== "Cabinets"){
    setPosition("Cabinets#1_Pink", x1, y1);
  }
}
function Image2Coordinates_Pink(){
  var x2 = getXPosition("WallPaint#2_Pink");
  var y2 = getYPosition("WallPaint#2_Pink");
  if(getText("Interior_Dropdown#6") == "Counter-Tops"){
    setPosition("CounterTops#2_Pink", x2, y2);
  } else if(getText("Interior_Dropdown#6")== "Cabinets"){
    setPosition("Cabinets#2_Pink", x2, y2);
  }
}
onEvent("Interior_Dropdown#6", "change", function() {
  if(getText("Interior_Dropdown#6") == "Floor") {
    LightPinkElementsHidden();
    showElement("Floor#1_Pink");
    Image1Coordinates_Pink();
  }
});
onEvent("Interior_Dropdown#6", "change", function() {
  if(getText("Interior_Dropdown#6") == "Wall Paint") {
    LightPinkElementsHidden();
    showElement("WallPaint#1_Pink");
    showElement("WallPaint#2_Pink");
  }
});
onEvent("Interior_Dropdown#6", "change", function() {
  if(getText("Interior_Dropdown#6") == "Cabinets") {
    LightPinkElementsHidden();
    showElement("Cabinets#1_Pink");
    showElement("Cabinets#2_Pink");
    Image1Coordinates_Pink();
    Image2Coordinates_Pink();
  }
});
onEvent("Interior_Dropdown#6", "change", function() {
  if(getText("Interior_Dropdown#6") == "Counter-Tops") {
    LightPinkElementsHidden();
    showElement("CounterTops#1_Pink");
    showElement("CounterTops#2_Pink");
    showElement("CounterTops#3_Pink");
    Image1Coordinates_Pink();
    Image2Coordinates_Pink();
    setPosition("CounterTops#3_Pink", 215, 80);
  }
});
onEvent("Interior_Dropdown#6", "change", function() {
  if(getText("Interior_Dropdown#6") == "Interior Design Options") {
    LightPinkElementsHidden();
  }
});
