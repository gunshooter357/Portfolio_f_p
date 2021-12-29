const navToggle = document.querySelector(".nav_toggle"); //have a variable called navToggle and you are now just making sure that this class is there
const navLinks = document.querySelectorAll('.nav_link');




navToggle.addEventListener("click", () => { //the arrow means that when we click we would like do some function
    document.body.classList.toggle('nav_open'); //everytime we click on this button we are going to target the bodywith the class list and with the toggle nav_open will eplain these properties 
}); //you now have a event listener and you are waiting for a user to click onto this button.

navLinks.forEach(link => {
    link.addEventListener('click' , () => {
        document.body.classList.remove('nav_open'); /*what this adoes is each time i am in the nav bar and i click where i want to go it will remove the nav for me and scroll down to the spot i want */
    })
})
