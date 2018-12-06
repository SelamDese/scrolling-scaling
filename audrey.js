const audrey = document.getElementById("audrey")

//Add an event listener to the `document` object to listen for the "scroll" event.

function handleScroll () {
    let howMuchScrolled = window.scrollY;
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let audreyWidth = howMuchScrolled/3;
    
        audrey.style.width = `${audreyWidth}px` ;
        audrey.style.minWidth = '50px';
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */    
    let audreyHeight = howMuchScrolled/4;
        audrey.style.height = `${audreyHeight}px`;
        audrey.style.minHeight = '100px';
  }
document.addEventListener("scroll", handleScroll);



