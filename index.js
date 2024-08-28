// SCRIPT FOR SHOWING/HIDING NAVBAR
const navCon = document.getElementById("nav-bar-ext")
const showNavBtn = document.getElementById("navBarBtn")

let showCount = 0

showNavBtn.addEventListener('click', () => {
    showCount++
    switch (showCount) {
        case 1:
            navCon.style.display = "flex"
            navCon.classList.remove("hideNav")
            navCon.classList.add("showNav")
            console.log("flex");

            showNavBtn.classList.remove("fa-bars")
            showNavBtn.classList.add("fa-xmark")
            break;
        case 2:
            showCount = 0
            navCon.classList.remove("showNav")
            navCon.classList.add("hideNav")

            showNavBtn.classList.remove("fa-xmark")
            showNavBtn.classList.add("fa-bars")

            let seconds = 0
            let timer = setInterval(() => {
                seconds++
                navCon.style.display = "none"

                if (seconds === 1) {
                    clearInterval(timer)
                }
            }, 500);
            break;
        default:
            break;
    }
})

// REDIRECTING TO PROJECT LINKS
// Project 1
document.getElementById("project1Btn").addEventListener('click', () => {
    window.location.href = ""
})
// Project 2
document.getElementById("project2Btn").addEventListener('click', () => {
    window.location.href = ""
})