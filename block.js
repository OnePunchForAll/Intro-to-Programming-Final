function checkCreds() {
    alert("Checking credentials...");
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("blockNumber").value;
    var fullName = firstName + " " + lastName;
    if (fullName.length > 20 || fullName.length < 4) {
        document.getElementById("loginStatus").innerHTML = "Invalid first and last name";
    }
    else if (badgeNumber > 20 || badgeNumber < 2) {
        document.getElementById("loginStatus").innerHTML = "Number of Block Numbers is an invalid number";
    }
    else {
        alert("Access Granted, Welcome " + fullName + "!");
        location.replace("welcome.html");
    }
}

function Array() {
    var arrayOfNames = ["Ghast", "Phantom", "Magma Cube", "Slime", "Dragon"];
    for (s = 0; s < arrayOfNames.length; s++) {
        alert(arrayOfNames[s]);
    }
    arrayOfNames.some(hostileMobs => alert(hostileMobs));
    arrayOfNames.push("Piglin Brute");
    for (s = 0; s < arrayOfNames.length; s++) {
        alert(arrayOfNames[s]);
    }
    var shoppingList = ["Creeper", "Spider", "Skeleton", "Zombie", "Piglin"];
    alert(shoppingList[3]);
    shoppingList.sort();
    shoppingList.forEach(elementJC => alert(elementJC));
    arrayOfNames.push("Enderman");
}

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

//Creates an alert
function pushalert() {
    alert("You punched a tree!")
}

//Creates an alert and after being pushed updates the webpage with ********* UPDATED
function update() {
    alert("You tried to eat an apple!")
    document.getElementById("update").innerHTML = "Apple eaten!";
}

//Created a for loop for the countdown isntead of a while loop, changed the currTime to equal 11 and the else if i to be greater than or equal to 6 and added the Blastoff ending
function forLoopCountDown() {
    var currTime = 11;
    for (var i = 1; i < 12; i++) {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "<img src='minecraft pictures/theo-eilertsen-photography-mwlhFUCir_8-unsplash.jpg'/>";
            }, 1000 * i);
        }
        else if (i >= 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Warning! Creeper coming behind you, in " + currTime;
            }, 1000 * i);
        }
        else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = currTime;
            }, 1000 * i);
        }
        //timer for Blastoff
    }
}

//Created a while loop to continue the countdown, then added the Blastoff ending
function whileLoopCountDown() {
    var currTime = 10;
    var i = 1;
    while (i < 12) {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = currTime;
            currTime = currTime - 1;
        }, 1000 * i);
        i = i + 1; //this equals i + +
        //timer for Blastoff
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
        }, 11000);
    }
}

//Created 11 different actions within this function, changed name on Space_CountDown.html as I now have access to a while loop meaning this code is no longer being used unless called upon
function countDown() {
    alert("You started the countdown!");
    var currTime = 10;
    //timer for 10 sec left   
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 1000);

    //timer for 9 sec left
    setTimeout(function () {
        //code goes here for first timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 2000);


    //timer for 8 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 3000);

    //timer for 7 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 4000);

    //timer for 6 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 5000);

    //timer for 5 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 6000);

    //timer for 4 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 7000);

    //timer for 3 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 8000);

    //timer for 2 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 9000);

    //timer for 1 sec left
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = currTime;
        currTime = currTime - 1;
    }, 10000);

    //timer for Blastoff
    setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
    }, 11000);
}
