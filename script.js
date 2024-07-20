document.addEventListener("DOMContentLoaded", function() {
  console.log("Welcome to the color generator");

  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let copy = document.querySelector(".copy");

  let colorger = () => {
    let hexa = '123456789abcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexa[Math.floor(Math.random() * hexa.length)];
    }
    return color;
  }

  const handleBtn1 = () => {
    let rgb1 = colorger();
    let rgb2 = colorger();
    console.log(rgb1, rgb2);
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copy.innerText = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`;

  }

  const handleBtn2 = () => {
    console.log("Button 2 clicked");
    let rgb1 = colorger();
    let rgb2 = colorger();
    console.log(rgb1, rgb2);
    btn2.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copy.innerText = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2})`;
  }

  btn1.addEventListener('click', handleBtn1);
  btn2.addEventListener('click', handleBtn2);

  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(copy.innerText)
      .then(() => {
        console.log("Copied to clipboard");
        alert("Copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });

  })


  // Set initial background gradient color
  const setInitialGradient = () => {
    let rgb1 = colorger();
    let rgb2 = colorger();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyText.textContent = `background-image:linear-gradient(to right, ${rgb1}, ${rgb2});`;
  }

  setInitialGradient(); // Call the function on page load

});
