function preload(){

    classifier =  ml5.imageClassifier("DoodleNet");

    
}

function setup(){
    
    canvas = createCanvas(300, 300);
    canvas.position(525,250);
    background("white");
    canvas.mouseReleased(classify_canvas);

    var synth = window.speechSynthesis;
    
}

function draw(){

    //set teh strokeWeight() to the width of the line we want

    strokeWeight(5);

    //set teh stroke() the color of teh line
    stroke("maroon");

    //if(mouseIsPressed) draw a line(prevx, prevy, currentx, currenty)
    if (mouseIsPressed){

        line( pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classify_canvas(){

    classifier.classify(canvas, gotResults);
    

}

function gotResults(error, results){
    
    if(error){
        console.error(error);
    } else {
        console.log(results);

        document.getElementById("label").innerHTML = results[0].label;

        document.getElementById("Confidence").innerHTML = (results[0].confidence *100).toFixed(2);

        speak_data = results[0].label;

        utter_data =  new SpeechSynthesisUtterance(speak_data);

        synth.speak(utter_data);
     
     }
    
}

function clear_canvas(){
    background("white");
}