function generateCommand() {
  var item = document.getElementById("item").value;
  var quantity = document.getElementById("quantity").value;
  var customName = document.getElementById("custom-name").value;
  var colorDropdown = document.getElementById("color-dropdown");
  var colorize = colorDropdown.value !== "";

  var color = colorDropdown.options[colorDropdown.selectedIndex].getAttribute("data-color");

  var nameFormatDropdown = document.getElementById("name-format-dropdown");
  var nameFormat = nameFormatDropdown.value;

  var formattingComponent = "";

  if (nameFormat === "underline") {
    formattingComponent = "\"underlined\":true";
  } else if (nameFormat === "italic") {
    formattingComponent = "\"italic\":true";
  } else if (nameFormat === "bold") {
    formattingComponent = "\"bold\":true";
  }

  var nameComponent = "";
  if (customName) {
    nameComponent = "\"text\":\"" + customName + "\",";
  }

  var command = `/give @p ${item}{display:{Name:{${nameComponent}${formattingComponent}},"color":"${color}"}} ${quantity}`;

  document.getElementById("output").textContent = command;
}
