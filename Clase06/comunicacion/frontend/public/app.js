const p1 = document.getElementById("message1");
const p2 = document.getElementById("message2");

fetch("/api/config")
  .then((resp) => resp.json())
  .then((resp) => {
    const pathBackend1 = resp.backend1;
    fetch(pathBackend1)
      .then((resp) => resp.json())
      .then((resp) => {
        p1.innerHTML = resp.message1;
        p2.innerHTML = resp.message2;
      });
  });
