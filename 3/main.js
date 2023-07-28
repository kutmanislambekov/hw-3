const BOXEl = document.querySelector(".BOX");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(BOXEl);
    data.map((el) => {
      if (el.id <= 100) {
        const col = document.createElement("div");
        col.classList.add("col");
        col.innerHTML += `
            <img class = "img" src="${el["url"]}" alt="">
            <p><h2>${el["title"]}</h2></p>`;
        BOXEl.appendChild(col );

        const img =  col.querySelector(".img");
        img.addEventListener("click", () => {
            if (img.style.position) {
                img.style.position = "";
                img.style.top = "";
                img.style.left = "";
                img.style.width = "";
                img.style.height = "";
              } else {
                img.style.position = "absolute";
                img.style.position = "fixed";
                img.style.top = "100px";
                img.style.left = "500px";
                img.style.width = "500px";
                img.style.height = "500px";
              }
        });
      }
    });
  })
  .catch((err) => {
    console.log(err);
});
