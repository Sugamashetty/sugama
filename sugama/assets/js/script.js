/*=============== PRELOADER ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    distance:"60px",

    duration:2000,
    delay:100
});

sr.reveal(`.contact-headline, .project-headline`,{delay:500,});
sr.reveal(`.nav.footer-home, .footer-social, .skills-item, .project-item`,{origin:"top",interval:100,});
sr.reveal(`.contact-description,.contact-form`,{origin:"left",interval:100,});
sr.reveal(`.hero-image`,{origin:"top"});
sr.reveal(`.hero-text`);

/*=============== SHOW SCROLL UP ===============*/

/*=============== EMAIL JS =============contact=*/
const contactForm=document.getElementById("contact-form"),
contactMessage=document.getElementById("contact-message"),
sendButton = document.querySelector("#contact-form button");
const sendEmail=async(e)=>{
    e.preventDefault();
    sendButton.disabled=true;
    sendButton.textContent="Sending....";

    try{
        await emailjs.sendForm(
            "service_tu5s8tn",
            "template_sm01n0p",
            "#contact-form",
            "GQcatY3vj8DWqzWHk"
        );
        contactMessage.textContent="Meesage sent succesfully";
        setTimeout(()=>{
            contactMessage.textContent="";
        },4000);
        
        contactForm.reset();
    }
    catch(error){
        contactMessage.textContent="message not sent(service error)";
    }
    finally{
        sendButton.disabled=false;
        sendButton.textContent="Send message";
    }
    };
   contactForm.addEventListener("submit",sendEmail)