Status = "";
objects = [];
// on = object_name

function setup()
{
    canvas = createCanvas( 700, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    cocossd = ml5.objectDetector("cocossd", modelready);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    on = document.getElementById("object_name").value;

    objectDetector.detect(gotresults);
    document.getElementById("status").innerHTML = "object mentioned found";    
}

function draw()
{
    image(video, 0, 0, 850, 500);
    if(objects[i].label == on) { video.stop(); objectDetector.detect(gotResult); 
        document.getElementById("object_status").innerHTML = object_name + " Found";
         synth = window.speechSynthesis; utterThis = new SpeechSynthesisUtterance(object_name + "Found"); synth.speak(utterThis);
        } else { document.getElementById("object_status").innerHTML = object_name + " Not Found"; }
    if (Status != "") 
    {
        cocossd.detect(video, gotresults);

        for(i = 0 ; i < objects.length ; i++)
        {
            rect(objects[i].x , objects[i].y, objects[i].width,objects[i].height);
            text(objects[i].label + "     " + (objects[i].confidence). toFixed(3), objects[i].x + 15, objects[i].y + 15);

        }
    }
    
}

function preload()
{

}

function modelready()
{
    console.log("(: yay good job!!! :)")
    Status = true;
    if (objects[i].label == object_name) 
    {
            
    }
}

function gotresults(error, results)
{
    if (error) 
    {
        console.log(error);    
    }

    console.log(results);
    objects = results;
}