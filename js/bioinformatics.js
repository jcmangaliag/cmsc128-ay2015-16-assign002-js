
var input1, input2, answer, i;

function askInput(id1, id2) {
	input1 = prompt("Enter your input 1: ");
	input2 = prompt("Enter your input 2: ");

	answer = 0;
	if (input1 == undefined || input2 == undefined)
		document.getElementById(id2).setAttribute("value", "Output: Error Input!");

	showInputField(id1, id2);
}

function showInputField(id1, id2){
	document.getElementById(id1).removeAttribute("hidden");
	document.getElementById(id2).removeAttribute("hidden");
	document.getElementById(id1).setAttribute("value", "Input: " + input1 + ", " + input2);
}

function getHammingDistance(id1, id2){
	askInput(id1, id2);

	if ((input1.length > 0 && input2.length > 0) && (input1.length == input2.length)){
		for (i=0; i<input1.length; i++)
			if(input1.charAt(i) != input2.charAt(i))
				answer++;

		document.getElementById(id2).setAttribute("value", "Output: " + answer);
	} else
		document.getElementById(id2).setAttribute("value", "Output: Error! Strings are not equal!");
}

function countSubstrPattern(id1, id2){
	askInput(id1, id2);

	var input1Replaced = input1;
	while(input1.indexOf(input2) != -1){
		answer++;
		for(i=0; i<=input1.indexOf(input2); i++)
			input1Replaced = input1Replaced.replace(input1.charAt(i), "");
		
		input1 = input1Replaced;
	}
	document.getElementById(id2).setAttribute("value", "Output: " + answer);
}

function isValidString(id1, id2){
	askInput(id1, id2);

	answer = true;
	for(i=0; i<input1.length; i++) {
		if (input2.indexOf(input1.charAt(i)) == -1)
			answer = false;
	}
	document.getElementById(id2).setAttribute("value", "Output: " + answer);
}