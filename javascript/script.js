// Function to change life section tabs on the About Me page
function openTab(buttonName) {
    var i;
    let button = "Button";
    let activeButton = "activeButton";
    var x = document.getElementsByClassName("lifeSection");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }

    if (window.innerWidth <= 1000)
    {
        document.getElementById(buttonName).style.display = "block";
    }
    else
    {
        document.getElementById(buttonName).style.display = "grid";
    }
    
    x = document.getElementsByClassName("lifeSection"+button);
    for (i = 0; i < x.length; i++) {
        if (x[i].classList.contains(activeButton)) {
            x[i].classList.remove(activeButton);
        }
    }
    document.getElementById(buttonName+button).classList.add(activeButton);
}

// Function to toggle the Contact Me form
function toggleContact() {
    var wrapper = document.getElementById("contactMeFormWrapper");
    if (wrapper.style.display == "none") {
        wrapper.style.display = "block";
    }
    else {
        fadeOut("contactMeFormWrapper");
    }
}

// Function to confirm the submission of the message
function confirmSubmission() {
    if (confirm('Please confirm you would like to send this message.'))
    {
        showThankYou();
    }
}

// Function to hide the contact form and show the thank you message
function showThankYou() {
    // Hide the contact form
    fadeOut("contactMeFormWrapper");

    setTimeout(function() {document.getElementById("thankYouMessage").style.display = "block"; }, 500);
    setTimeout(function() {fadeOut("thankYouMessage");}, 5000);
}

// Function to fade out an element
function fadeOut(elementID) {
    var targetStyle = document.getElementById(elementID).style;
    targetStyle.opacity = 1;
    (function fade() {
        if ((targetStyle.opacity -= 0.1)<0)
        {
            targetStyle.display = "none";
            targetStyle.opacity = 1; 
        }
        else
        {
            setTimeout(fade, 40);
        }
    })();
}
