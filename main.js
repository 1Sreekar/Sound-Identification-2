function start(){

    navigator.mediaDevices.getUserMedia({ audio:true })
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/JIM87A9tX/model.json",
    modelready);
    
    }
    
    function modelready(){
        classifier.classify(gotResults);
    }