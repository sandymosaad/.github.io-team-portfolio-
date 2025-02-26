document.getElementById("showSkills").addEventListener("click", function() {
    document.getElementById("skills").style.display = "block";
    document.getElementById("tools").style.display = "none";
    this.classList.add("active");
    document.getElementById("showTools").classList.remove("active");
});

document.getElementById("showTools").addEventListener("click", function() {
    document.getElementById("skills").style.display = "none";
    document.getElementById("tools").style.display = "block";
    this.classList.add("active");
    document.getElementById("showSkills").classList.remove("active");
});


document.addEventListener("DOMContentLoaded", function () {
    let teamName = "Tech Visionaries";
    let specialization = "Specialized in Backend, Frontend, and UI/UX Development";
    
    let nameElement = document.getElementById("team-name");
    let specializationElement = document.getElementById("team-specialization");
    
    function typeEffect(element, text, delay = 100) {
        let i = 0;
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, delay);
            }
        }
        typing();
    }

    typeEffect(nameElement, teamName, 100); 
    setTimeout(() => {
        typeEffect(specializationElement, specialization, 50); 
    }, teamName.length * 100 + 500);
});
