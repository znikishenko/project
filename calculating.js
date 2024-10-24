const modal = document.getElementById("myModal");
const btn = document.getElementById("calculatePriceButton");
const span = document.getElementsByClassName("close")[0];
const costDisplay = document.getElementById("costDisplay");

btn.onclick = function() {
    const destination = document.getElementById("destination").value;
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const people = parseInt(document.getElementById("people").value);

    const timeDifference = endDate - startDate;
    const totalDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

    const baseCostPerPersonPerDay = 50;
    const totalCost = totalDays * baseCostPerPersonPerDay * people;

    costDisplay.innerText = `Destination: ${destination}\nTotal Days: ${totalDays}\nTotal People: ${people}\nTotal Cost: $${totalCost}`;
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
