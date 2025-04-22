let captcha;

function generate() {
  document.getElementById("submit").value = "";
  captcha = document.getElementById("image");
  let uniquechar = "";

  const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++) {
    uniquechar += randomchar.charAt(Math.floor(Math.random() * randomchar.length));
  }

  captcha.innerHTML = uniquechar;
}

function printmsg(event) {
  event.preventDefault(); // Prevent form submission for CAPTCHA check
  const usr_input = document.getElementById("submit").value;

  if (usr_input === captcha.innerHTML) {
    document.getElementById("key").innerHTML = "Matched";
    generate();
  } else {
    document.getElementById("key").innerHTML = "Not Matched";
    generate();
  }
}
