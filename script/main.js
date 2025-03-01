document.getElementById("date").innerText = new Date().toLocaleDateString();

document.getElementById("blog").addEventListener("click",
    function () {
        window.location.href = "/Blog.html"
    })


let completedCount = 0;
document.querySelectorAll(".completed-btn").forEach(button => {
    button.addEventListener("click",
        function () {
            completedCount++;

            let activityLog = document.querySelector(".activity-log");
            let time = new Date().toLocaleTimeString();
            let logMessage = document.createElement("p");
            logMessage.innerText = `You have completed a task at ${time}`;
            activityLog.appendChild(logMessage);


            let taskCount = document.getElementById("task-count");
            let count = parseInt(taskCount.innerText);
            taskCount.innerText = count > 0 ? count - 1 : 0;

            let completedTotal = document.getElementById("completed-count");
            let totalCompleted = parseInt(completedTotal.innerText);
            completedTotal.innerText = totalCompleted + 1;

            this.disabled = true;
            

            if (completedCount % 6 === 0) {
                alert("You have completed 6 tasks!");
                alert("Great job! Keep going!");
            } else {
                alert("Task Completed!");
            }

        });
});

document.getElementById("clear-history").addEventListener("click", function(){
    document.querySelector(".activity-log").innerHTML = "";
})
