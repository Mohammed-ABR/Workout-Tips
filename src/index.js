document.getElementById("get-advice").addEventListener("click", function() {
    let message = "Your advice: ";
    let goals = [];

    if (document.getElementById("gain-muscle").checked) goals.push("Focus on heavy weight training and protein intake.");
    if (document.getElementById("lose-weight").checked) goals.push("Do cardio exercises and monitor your calorie intake.");
    if (document.getElementById("increase-stamina").checked) goals.push("Perform endurance exercises like running and cycling.");

    if (goals.length > 0) {
        message += goals.join(" ");
    } else {
        message = "Please select a goal to get advice!";
    }

    document.getElementById("message").innerText = message;
    document.getElementById("message").classList.add("fade-in");
});

document.getElementById("reset").addEventListener("click", function() {
    document.querySelectorAll("input[type='checkbox']").forEach(input => input.checked = false);
    document.getElementById("message").innerText = "";
});