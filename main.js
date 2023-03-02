function preload(){
stuff = loadImage("https://clipartix.com/wp-content/uploads/2018/01/Beard-and-mustache-clipart-clip-art-library.jpg")
}
function setup(){
canvas =  createCanvas(500, 400)
canvas.position(365, 150)

thing = createCapture(VIDEO)
thing.hide()
umm = ml5.poseNet(thing, modelLoadedhopefully)
umm.on("pose", meh)
}
function draw(){
    image(thing, 0, 0, 500, 400)
    image(stuff, noseX -100, noseY-60, 70, 70)
}
function takePic(){
    save("me.png")
}
function meh(results){
    if (results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        
    }
}