var input1, input2, answer, i;

function askInput(id1, id2) {	// prompts the user for two inputs
	input1 = prompt("Enter your input 1: ");
	input2 = prompt("Enter your input 2: ");

	answer = 0;
	if (input1 == undefined || input2 == undefined)	// if ever the user selects 'cancel' in the prompt
		document.getElementById(id2).setAttribute("value", "Output: Error Input!");

	showInputField(id1, id2);
}

function showInputField(id1, id2){	// sets the initially hidden text fields visible and also puts the inputs in first text field
	document.getElementById(id1).removeAttribute("hidden");
	document.getElementById(id2).removeAttribute("hidden");
	document.getElementById(id1).setAttribute("value", "Input: " + input1 + ", " + input2);
}

function getHammingDistance(id1, id2){	// number of inversions of input1 and input2
	askInput(id1, id2);

	if ((input1.length > 0 && input2.length > 0) && (input1.length == input2.length)){	// checks for same input length and if the length is greater than 0
		for (i=0; i<input1.length; i++)	// counts the number of differences of each character at a specific index i
			if(input1.charAt(i) != input2.charAt(i))
				answer++;

		document.getElementById(id2).setAttribute("value", "Output: " + answer);	// sets the output in the text field
	} else	// if invalid inputs
		document.getElementById(id2).setAttribute("value", "Output: Error! Strings are not equal!");
}

function countSubstrPattern(id1, id2){	// counts the occurence of input2 in string input1. It also supports counting overlapping substrings
	askInput(id1, id2);

	var input1Replaced = input1;
	while(input1.indexOf(input2) != -1){	// while there is a substring
		answer++;	// increments the occurence
		for(i=0; i<=input1.indexOf(input2); i++)	// removes characters before the substring including the first character of substring
			input1Replaced = input1Replaced.replace(input1.charAt(i), "");
		
		input1 = input1Replaced;
	}
	document.getElementById(id2).setAttribute("value", "Output: " + answer);	// sets the output in the text field
}

function isValidString(id1, id2){	// checks if input1 only uses characters that are in input2
	askInput(id1, id2);

	answer = true;
	for(i=0; i<input1.length; i++)	// checks each character of input1
		if (input2.indexOf(input1.charAt(i)) == -1)	// if the character in index i is not found in input2, answer is false
			answer = false;

	document.getElementById(id2).setAttribute("value", "Output: " + answer);	// sets the output in the text field
}