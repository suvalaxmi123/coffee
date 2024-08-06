function toogle() {
    let button = document.getElementById("button");
    let about = document.getElementById("about");
    let body = document.querySelector("body")
  
    if (body.style.backgroundColor === "white") {
      body.style.backgroundColor = "#967117";
    } else {
        body.style.backgroundColor = "white";
    }
  }