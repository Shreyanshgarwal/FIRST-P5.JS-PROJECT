function preload() {
    
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,500);
    
        fill("#008000")
        stroke("#008000")
        rect(70,40,500,25)
        rect(70,440,500,25)
        rect(35,40,25,400)
        rect(535,40,25,400)

        fill("#ff0000");
        stroke("#ff0000")
        circle(50,50,50);
        circle(550,50,50);
        circle(50,450,50);
        circle(550,450,50);

        
        
}
    