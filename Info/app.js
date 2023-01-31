let infobtn = document.getElementById('info');
let feedbackbtn = document.getElementById("feedback");
let infobtn1 = document.getElementById('info1');
let feedbackbtn1 = document.getElementById("feedback1");

function iselectedbtn() {
    infobtn.style.backgroundColor = "#ECEEF1";
    feedbackbtn.style.backgroundColor = "#ffffff";
    infobtn1.style.backgroundColor = "#ECEEF1";
    feedbackbtn1.style.backgroundColor = "#ffffff";
    document.getElementById("feed-container").style.display = "none";
    document.getElementById("info-hide").style.display = "block";
}

function fselectedbtn() {
    feedbackbtn.style.backgroundColor = "#ECEEF1";
    infobtn.style.backgroundColor = "#ffffff";
    feedbackbtn1.style.backgroundColor = "#ECEEF1";
    infobtn1.style.backgroundColor = "#ffffff";
    document.getElementById("feed-container").style.display = "block";
    document.getElementById("info-hide").style.display = "none";
}
