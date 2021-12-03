//This is the JavaScript file for text repeater//

function repeater(){			

var textInput = document.getElementById("textInput").value;
var repeatNumber = document.getElementById("numberInput").value;

var i;
var text = "";

	for(let i=0; i<repeatNumber; i++){
			text += textInput+" ";
	}			
demo.innerHTML = text;	

			
}		

//Copy text coming soon
function copyText(){			
var demo = document.getElementById("demo").textContent;

demo.select();
demo.setSelectionRange(0,99999);
navigator.clipboard.writeText(demo.value);
alert(demo);				
}	
