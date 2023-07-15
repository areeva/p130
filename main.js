make_it_right_song="";
life_goes_on_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
song_name = "";
scorerightWrist = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    life_goes_on_song = loadSound("life-goes-on.mp3");
    make_it_right_song = loadSound("make-it-right.mp3");
}
life_goes_on_song
function modelLoaded(){
    console.log("poseNet Is Initialized");
}





function draw(){
    image(video,0,0,600,530);

    fill("#00ff00");
    stroke("#ff0000");

    make_it_right_song =make_it_right_song.isPlaying();
    console.log(song_Peter_pan);

    life_goes_on_song = life_goes_on_song.isPlaying();
    console.log(life_goes_on_song); 

    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        life_goes_on_song.stop();
        if(make_it_right_song == false){
            make_it_right_song.play();
        }
        else{
            console.log("Song Name: life_goes_on_song");
            document.getElementById("song_id").innerHTML = "Song Name:life_goes_on_song";
        }
    }

    if(scorerightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        make_it_right_song.stop();
        if(song_Harry_potter_theme == false){
            Harry_potter_theme_song.play();
        }
        else{
            console.log("Song Name: life_goes_on_song");
            document.getElementById("song_id").innerHTML = "Song Name:life_goes_on_song";
        }
    }
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log(scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log(scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}
