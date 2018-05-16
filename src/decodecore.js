function processString(inputBase, outputBase, stringToDecode){
	if (stringToDecode.length === 0) {return "";}

	switch (inputBase){
		case "2":
		case "8":
		case "10":
		case "16":
		case "36":
			var result;
			try {
				result = parseInt(stringToDecode.toLowerCase(), inputBase);
				if (Number.isNaN(result)) {throw new Error();}
			} catch (e){
				return "The input is not a valid base " + inputBase + " number.";
			}
			result = result.toString(outputBase);
			return result;
		case "64":
			try {
				return atob(stringToDecode);
			} catch (e) {
				return "The input is not a valid base 64 encoded string.";
			}
		case "String":
			return stringDecoding(stringToDecode, outputBase);
		default:
			return "An unknown error occurred.";
	}
}

function base64Decoding(stringToDecode, outputBase){
	
}

function stringDecoding(stringToDecode, outputBase){
	switch (outputBase){
		case "36":
			var result = parseInt(stringToDecode.toLowerCase(), 36);
			if (isNaN(result)){
				return "The input is not a valid base 36 number.";
			}
			return parseInt(stringToDecode.toLowerCase(), 36);
		case "64":
			return btoa(stringToDecode);
		default:
			return stringToDecode;

	}
}
exports.processString = processString;