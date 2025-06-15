//your JS code here. If required.
const counterElement = document.getElementById("counter");
    const button = document.getElementById("incrementBtn");

    // Parse initial value
    let count = parseInt(counterElement.textContent);

    // Event listener for button click
    button.addEventListener("click", () => {
      alert("Current value (before increment): " + count);
      count++;
      counterElement.textContent = count;
    });