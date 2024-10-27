document.querySelector(".submit").addEventListener('click', function () {
    const inputTxt = document.querySelector('.msg').value;

    fetch("/hash", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: inputTxt })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("hash").innerText = data.hashed_message;
    })
    .catch(error => console.error("Error:", error));
});
