//gui paramaters
var gui;
let projectileSize= 10;

let params= {
    //failures
    projectileWidth: projectileSize,
    projectileHeight: projectileSize,
    // for drop()
    descend: 60,

    //success!!!
    yOffset: 25,
    columnsNum: 9,
    rowsNum: 3,
}

// canvas properties
let screenWidth= 500;
let screenHeight= 500;

// creature properties
let creatures=[];
let creatureImg
let creatureWidth= 40;
let creatureHeight= 40;
let creatureVelocity= .75;

// creature positioning properties
let xSpacing= 50;
let ySpacing= 40;
let xOffset= (screenWidth- (params.columnsNum-1) * xSpacing) /2;

// launcher properties
let launcher;
let launcherWidth= 150;
let launcherHeight= 20;

// projectile properties
let projectiles= [];
let projectileVelocity= 7;

//transmitter (emitter) array initialisation
let transmitters= [];

//for win condition
let counter= 0;

function preload(){
    creatureImg= loadImage('assets/creature_img.png');
}

function setup() {
    populateCreatures();

    launcher= new Launcher(screenWidth /2, screenHeight- launcherHeight/2);

    gui= QuickSettings.create(550, 25, "Change Values")
        .addRange("Head Start", 0, 200, params.yOffset, 1,
            function(value){
                params.yOffset= value;

                creatures= [];
                populateCreatures();
                loop();
                counter= 0;
            })
        .addRange("Columns", 1, 9, params.columnsNum, 1,
            function(value){
                params.columnsNum= value;

                creatures= [];
                populateCreatures();
                loop();
                counter= 0;
            })
        .addRange("Rows", 1, 9, params.rowsNum, 1,
            function(value){
                params.rowsNum= value;

                creatures= [];
                populateCreatures();
                loop();
                counter= 0;
            })
        

    // failed to make these work unfortunately
        // .addRange("Projectile Size", 1, 50, projectileSize, 1,
        //     function(value){
        //         projectileSize= value;
        //         projectiles= [];

        //         for(let i= projectiles.length- 1; i>= 0; i--){
        //             projectiles[i].animate();
        //             projectiles[i].render();
        //                 for(let o= creatures.length-1;o>= 0; o--){
        //                     if(projectiles[i].collides(creatures[o])){
        //                         transmitters.push(new Transmitter(creatures[o].pos.x, creatures[o].pos.y));
        //                         creatures.splice(o, 1);
        //                         projectiles.splice(i, 1);
        //                         counter++
        //                         break;
        //                     }
        //                 }
        //        }    

        //         projectiles.push(new Projectile(
        //             launcher.pos.x,
        //             screenHeight- launcherHeight,
        //             launcher.pointerAngle
        //             ))
        //   });
        //
        //
        // .addRange("Approach Rate", 1, 150, params.descend, 1,
        //     function(value){
        //         params.descend= value;

        //         creatures= [];
        //         creatures.drop();
        //     });

    createCanvas(screenWidth, screenHeight);
    background(255);    
}

function draw() {
    background(150);

    transmitters.forEach(transmitter => {
        transmitter.createParticles();
        transmitter.refresh();
        transmitter.render();
    });

    launcher.render();
    launcher.animate();

    let drop= false;

    creatures.forEach(creature => {
        creature.animate();
        creature.render();

        creature.pos.x >= screenWidth- creatureWidth ? drop = true : null;
        creature.pos.x <= screenWidth- screenWidth ? drop = true : null;

    });

    if(drop){
        creatures.forEach(creature =>{
            creature.drop();
        })
    }

    for(let i= projectiles.length- 1; i>= 0; i--){
        projectiles[i].animate();
        projectiles[i].render();
            for(let o= creatures.length-1;o>= 0; o--){
                if(projectiles[i].collides(creatures[o])){
                    transmitters.push(new Transmitter(creatures[o].pos.x, creatures[o].pos.y));
                    creatures.splice(o, 1);
                    projectiles.splice(i, 1);
                    counter++;
                    break;
                }
            }
    }

    gameState();
}

function gameState(){
    let gameOver;
    
    creatures.forEach(creature =>{
        if(creature.pos.y > 375){
            gameOver=true;
        } 
    });

        if(gameOver){
            background(0);
            textSize(80);
            fill(200, 0, 0);
            textAlign (CENTER, CENTER);
            text("GAME OVER", 250, 100);

            noLoop();
        }

        if(counter>= params.columnsNum*params.rowsNum){
            noLoop();
            textSize(100);
            fill(230, 245, 30);
            textAlign (CENTER, CENTER);
            text("WINNAR!!", 250, 100);
        }
    }

function keyPressed(){
    if(keyCode === 32){
        projectiles.push(new Projectile(
            launcher.pos.x,
            screenHeight- launcherHeight,
            launcher.pointerAngle
            ))
    }

    if(keyCode === RIGHT_ARROW){
        launcher.pointerAngle += 0.5;
    } else if(keyCode === LEFT_ARROW){
        launcher.pointerAngle -= 0.5;
    } 

}

function populateCreatures() {
    for(let row=0; row< params.rowsNum; row++){
        for(let column=0; column< params.columnsNum; column++){
            creatures.push(new Creature(column*xSpacing+xOffset, row*ySpacing+params.yOffset));
        }
    }
}