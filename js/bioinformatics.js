/**
 * Author: Juan Carlo M. Mangaliag
 * Section: CMSC 128 AB-2L
 * Assign 002: Programming a Simple Bioinformatics Library
 * Program Description: This is a simple bioinformatics library that can get the hamming distance of two strings, count the substring pattern, check if string is valid given an alphabet, get the skew number, and get the max and min skew number.
 * Date: March 6, 2016
 */
function askInput(id1, id2) {	// prompts the user for two inputs
	input1 = prompt("Enter your input 1: ");
	input2 = prompt("Enter your input 2: ");
	answer = 0;

	setInputOutputTextFields(input1, input2, id1, id2);
}

function setInputOutputTextFields(input1, input2, id1, id2){	// sets the initially hidden text fields visible and also puts the inputs in first text field
	if (input1 == undefined || input2 == undefined)	// if ever the user selects 'cancel' in the prompt
		document.getElementById(id2).setAttribute("value", "Output: Error Input!");

	if (document.getElementById(id1).hasAttribute("hidden") && document.getElementById(id2).hasAttribute("hidden")){	// sets the input and output text fields visible
		document.getElementById(id1).removeAttribute("hidden");
		document.getElementById(id2).removeAttribute("hidden");
	}

	document.getElementById(id1).setAttribute("value", "Input: " + input1 + ", " + input2);	// sets the values of input text fields
		
	switch (id2) {	// sets the values of output text fields
		case "hammingDistanceOutput": 
			document.getElementById(id2).setAttribute("value", "Output: " + getHammingDistance(input1, input2));
			break;
		case "substrPatternOutput": 
			document.getElementById(id2).setAttribute("value", "Output: " + countSubstrPattern(input1, input2));
			break;
		case "stringValidOutput": 
			document.getElementById(id2).setAttribute("value", "Output: " + isValidString(input1, input2));
			break;
		case "skewNumberOutput": 
			document.getElementById(id2).setAttribute("value", "Output: " + getSkew(input1, input2));
			break;
		case "maxSkewNumberOutput": 
			document.getElementById(id2).setAttribute("value", "Output: " + getMaxSkewN(input1, input2));
			break;
		case "minSkewNumberOutput": 
			document.getElementById(id2).setAttribute("value", "Output: " + getMinSkewN(input1, input2));
			break;
	}
}

function getHammingDistance(input1, input2){	// number of inversions of input1 and input2
	var answer = 0;
	if ((input1.length > 0 && input2.length > 0) && (input1.length == input2.length)){	// checks for same input length and if the lengths are greater than 0
		for (var i=0; i<input1.length; i++)	// counts the number of differences of each character at a specific index i
			if(input1.charAt(i) != input2.charAt(i))
				answer++;	// no. of inversions
		return answer;	
	} else	// if invalid inputs
		return "Error! Strings not equal or no input!";
}

function countSubstrPattern(input1, input2){	// counts the occurence of input2 in string input1. It also supports counting overlapping substrings
	var answer = 0, input1Replaced = input1;
	if (input1.length > 0 && input2.length > 0) {
		while(input1.indexOf(input2) != -1){	// while there is a substring
			answer++;	// increments the occurence
			for(var i=0; i<=input1.indexOf(input2); i++)	// removes characters before the substring including the first character of substring
				input1Replaced = input1Replaced.replace(input1.charAt(i), "");
			
			input1 = input1Replaced;	// input1 becomes the reduced string
		}
		return answer;
	}
	return 0;	// if input length is less than 1, outputs zero
}

function isValidString(input1, input2){	// checks if input1 only uses characters that are in input2
	var answer = true;
	for(var i=0; i<input1.length; i++)	// checks each character of input1
		if (input2.indexOf(input1.charAt(i)) == -1)	// if the character in index i is not found in input2, answer is false
			answer = false;
	return answer;	
}


function getSkew(input1, input2) {	// computes Gs - Cs in input1 at a specified index of input2, indexing starts at 1 
	var answer, countG=0, countC=0;
	// input1's length should be greater than 0 and should be greater or equal to input2, and input2 should be greater than zero
	if ((input2 > 0) && (input1.length > 0) && (input1.length >= input2)){	
		for(var i=1; i<=input2; i++){	// iterates from 1 up to input2
			if (input1.charAt(i-1) == "G")	// if character on index i-1 is equal to G, countG will be incremented
				countG++;
			else if (input1.charAt(i-1) == "C")	// if character on index i-1 is equal to C, countC will be incremented
				countC++;
		}
		answer = countG - countC;	// answer is the Gs - Cs
		return answer;
	} else // if invalid inputs
		return "Error! Invalid input!";	
}

function getMaxSkewN(input1, input2){	// computes the max Gs - Cs in input1 starting from index 1 until the specified index of input2, indexing starts at 1
	var answer, countG=0, countC=0;
	// input1's length should be greater than 0 and should be greater or equal to input2, and input2 should be greater than zero
	if ((input2 > 0) && (input1.length > 0) && (input1.length >= input2)){	
		for(var i=1; i<=input2; i++){	// iterates from 1 up to input2
			if (input1.charAt(i-1) == "G")	// if character on index i-1 is equal to G, countG will be incremented
				countG++;
			else if (input1.charAt(i-1) == "C")	// if character on index i-1 is equal to C, countC will be incremented
				countC++;

			if (i == 1 || ((countG - countC) > answer))	// always stores the greater Gs-Cs in answer to get the max skew number
				answer = countG - countC;
		}
		return answer;
	} else // if invalid inputs
		return "Error! Invalid input!";
}

function getMinSkewN(input1, input2){	// computes the min Gs - Cs in input1 starting from index 1 until the specified index of input2, indexing starts at 1
	var answer, countG=0, countC=0;
	// input1's length should be greater than 0 and should be greater or equal to input2, and input2 should be greater than zero
	if ((input2 > 0) && (input1.length > 0) && (input1.length >= input2)){	
		for(var i=1; i<=input2; i++){	// iterates from 1 up to input2
			if (input1.charAt(i-1) == "G")	// if character on index i-1 is equal to G, countG will be incremented
				countG++;
			else if (input1.charAt(i-1) == "C")	// if character on index i-1 is equal to C, countC will be incremented
				countC++;

			if (i == 1 || ((countG - countC) < answer)) // always stores the lesser Gs-Cs in answer to get the min skew number
				answer = countG - countC;
		}
		return answer;
	} else // if invalid inputs
		return "Error! Invalid input!";	
}