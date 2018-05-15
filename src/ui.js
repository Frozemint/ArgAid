function updateUI(selectedMenuItemString){
	var dropDown = document.getElementsByName('OutputDropdown')[0].options;
	if (selectedMenuItemString === "String"){
		for (var i = 0; i < dropDown.length; i++){
			if (["32", "64", "String"].indexOf(dropDown[i].value) === -1){
				dropDown[i].disabled = true;
			}
		}
		return true;
	} else {
		for (var j = 0; j < dropDown.length; j++){
			dropDown[j].disabled = false;
		}
		return false;
	}

}

function checkForUIWarning(inputMenuItemString, outputMenuItemString){
	if (inputMenuItemString === "String" && outputMenuItemString === "32"){
		document.getElementById('RHSDivWarn').innerHTML = "Converting from string to base 32 is case insensitive!";
	} else {
		document.getElementById('RHSDivWarn').innerHTML = "";
	}
}

module.exports = {
	updateUI: updateUI,
	checkForUIWarning: checkForUIWarning
}
