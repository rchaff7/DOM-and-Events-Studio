
function init(){
    let flightStatus = document.getElementById("flightStatus")
    let shuttleBackground = document.getElementById("shuttleBackground")
    let shuttleHeight = document.getElementById("spaceShuttleHeight")
    let rocketImage = document.getElementById("rocket")

    let takeOffButton = document.getElementById("takeoff")
    let landingButton = document.getElementById("landing")
    let missionAbortButton = document.getElementById("missionAbort")

    let upButton = document.getElementById('up')
    let downButton = document.getElementById('down')
    let rightButton = document.getElementById('right')
    let leftButton = document.getElementById('left')

    let x = Number(rocketImage.style.left);

    function landRocket(statusString){
        flightStatus.innerHTML = statusString;
        shuttleBackground.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = 0;
        rocketImage.style.left = 0;
        x = 0;
    }

    function launchRocket(){
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (readyForTakeoff){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = Number(10000);
        }
    }

    takeOffButton.addEventListener("click", function(){
        launchRocket();
    })

    landingButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.")
        landRocket("The shuttle has landed.")
    })

    missionAbortButton.addEventListener("click", function(){
        let userAbort = window.confirm("Confirm that you want to abort the mission.")
        if (userAbort){
            landRocket("Mission aborted.")
        }
    })
    
    leftButton.addEventListener("click", function(){
        if(Number(shuttleHeight.innerHTML) > 0){
            rocketImage.style.left = `${x -= 10}px`
        }
    })

    rightButton.addEventListener("click", function(){
        if(Number(shuttleHeight.innerHTML) > 0){
            rocketImage.style.left = `${x += 10}px`
        }
    })

    upButton.addEventListener("click", function(){
        if(Number(shuttleHeight.innerHTML) == 0){
            launchRocket()
        } else if(Number(shuttleHeight.innerHTML) > 0){
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)+10000;
        }
    })

    downButton.addEventListener("click", function(){
        if(Number(shuttleHeight.innerHTML) > 10000){
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML)-10000;
        } else if(Number(shuttleHeight.innerHTML) > 0){
            window.alert("The shuttle is landing. Landing gear engaged.")
            landRocket("The shuttle has landed.")
        }
    })
}

window.onload = init;