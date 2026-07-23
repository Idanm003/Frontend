var surprisebtnClick = 0;
document.getElementById("surprisebtn").onclick = function () {
    surprisebtnClick++;
    console.log(surprisebtnClick.toString());
    if (surprisebtnClick < 10) {
        alert("Surprise!");
    }
    else if (surprisebtnClick >= 10 && surprisebtnClick < 20) {
        alert("Okay, that's enough surprises.");
    }
    else if (surprisebtnClick >= 20) {
        alert("STOP CLICKING THE BUTTON!");
        surprisebtnClick = 0;
    }
}