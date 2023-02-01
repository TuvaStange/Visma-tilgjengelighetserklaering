let infobtn = document.getElementById('info');
let feedbackbtn = document.getElementById("feedback");
let infobtn1 = document.getElementById('info1');
let feedbackbtn1 = document.getElementById("feedback1");

function iselectedbtn() {
    feedbackbtn.style.backgroundColor = "#ECEEF1";
    feedbackbtn.style.color = "#000000";

    infobtn.style.backgroundColor = "#0060A1";
    infobtn.style.color = "#ffffff";
    feedbackbtn1.style.backgroundColor = "#0060A1";
    feedbackbtn.style.color = "#000000";
    infobtn1.style.backgroundColor = "#ECEEF1";
    infobtn1.style.color = "#000000";

    document.getElementById("feed-container").style.display = "none";
    document.getElementById("info-hide").style.display = "block";
}

function fselectedbtn() {
    infobtn.style.backgroundColor = "#ECEEF1";
    infobtn.style.color = "#000000";


    feedbackbtn.style.backgroundColor = "#0060A1";
    feedbackbtn.style.color = "#ffffff";

    feedbackbtn1.style.backgroundColor = "#0060A1";
    feedbackbtn1.style.color = "#ffffff";

    infobtn1.style.backgroundColor = "#ECEEF1";
    infobtn1.style.color = "#000000";

    document.getElementById("feed-container").style.display = "block";
    document.getElementById("info-hide").style.display = "none";
}
