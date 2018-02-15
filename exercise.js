/*
Problem Set 1 PacMan  - Bounce off Walls 
1)	Bounce off Walls -  Given the code below and the 4 images  
PacMan1.png etc make the PacMan bounce off the boundary at x=600px 
so that it reverses its direction of motion and uses the last 2 images.
Then make it bounce off the boundary at x = 0px.  
You will need to take into account the size of the image.

*/

var exercise = {};
var step = 0
exercise.flag = 0; // 0 = mouth open  1 = mouth shut
exercise.increment = 20; // pixels to move either + or -
exercise.run = function() {
    step += 1
    exercise.img1 = document.getElementById('PacMan');
    exercise.updatePosition();
    exercise.checkWallCollision();
    exercise.chooseImage();
    
};



exercise.updatePosition = function() {
    // increment exercise.pos.x by increment 
    // now set image position using img1.style.left 
    // remember images positions are "xxx.px"
    exercise.pos.x = exercise.pos.x + exercise.increment
    
    exercise.img1.style.left = exercise.pos.x + 'px';
};

exercise.chooseImage = function() {
    // choose between all 4 images
    exercise.flag = step % 2;
    if (exercise.increment > 0) {
        if (exercise.flag === 1) {
            return exercise.img1.src = 'PacMan2.PNG';
           

        } else {
            return exercise.img1.src = 'PacMan1.PNG';
           

        }
    } else if (exercise.increment < 0) {
        if (exercise.flag === 1) {
            return exercise.img1.src = 'PacMan4.PNG';
          

        } else {
            return exercise.img1.src = 'PacMan3.PNG';
            
        }
    }
};
exercise.checkWallCollision = function() {
    // reset the direction of motion if wall is hit
    // you need to take into account image width
    if (exercise.pos.x >= 800 - 349  || exercise.pos.x <= 0  )
    {   console.log(exercise.pos.x);
        return exercise.increment = exercise.increment * (-1);
    }

};



