document.getElementById("colorButton").addEventListener("click", function() {
    const colors = ['#ff6b6b', '#fddb3a', '#5f27cd', '#1dd1a1', '#ff9ff3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


