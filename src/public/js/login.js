const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const obj = {};
  data.forEach((value, key) => (obj[key] = value));

  fetch("/session/login", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => {
    if (result.status === 200) {
      window.location.replace("/products");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario No encontrado!",
        footer: '<a href="/register">Registrese aqui</a>',
      });
    }
  });
});