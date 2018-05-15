function processString(inputBase, outputBase, stringToDecode){
	if (stringToDecode.length === 0) {return "";}
	
	switch (inputBase){
		case "2":
		case "8":
		case "10":
		case "16":
		case "32":
			var result = parseInt(stringToDecode.toLowerCase(), inputBase).toString(outputBase);
			if (isNaN(result)){
				return "The input is not a valid base " + inputBase + " number.";
			}
			return result;
		default:
			return "err";
	}
}

exports.processString = processString;