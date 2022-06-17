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