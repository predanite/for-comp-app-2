Webcam.set({
    width:400,
    height:350,
    image_format:"png",
    png_quality:100,
    constraints:{
        facingMode:"environment"
}
});
camera=document.getElementById("supacam");
Webcam.attach(camera)

function cheese()
{
    Webcam.snap(function(data_uri){
        document.getElementById("villacam").innerHTML='<img id="capturedimage" src="'+data_uri+'">';
    });
}

classifier=ml5.imageClassifier('MobileNet',modelLoaded)

function modelLoaded()
{
    console.log("model is loaded");
}

function sneeze()
{
  img=document.getElementById("capturedimage");
   classifier.classify(img,gotresult);
}

function gotresult(error,results) 
{
   if(error)    
   {
       console.error(error);
   }
   else
   {
       console.log(results)
       document.getElementById("obname").innerHTML=results[0].label;
    }
}