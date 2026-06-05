function getData() {

  let fileImage = document.querySelector("#fileInput").files[0];
  let username = document.querySelector("#name1").value.trim();
  let email = document.querySelector("#email1").value.trim();
  let github = document.querySelector("#git1").value.trim();

  if (!fileImage) {
    alert("Enter your image");
    return false;
  }

  if (username === "" || username.length > 25) {
    alert("Your name is not valid");
    return false;
  }

  if (email.indexOf('@') === -1) {
    alert("Your email is not valid");
    return false;
  }

  if (github === "" || github.indexOf('@') == -1) {
    alert("GitHub username is not valid");
    return false;
  }

  // ✅ تخزين البيانات
  localStorage.setItem("name", username);
  localStorage.setItem("email", email);
  localStorage.setItem("github", github);

  // ✅ تخزين الصورة
  let reader = new FileReader();
  reader.onload = function () {
    localStorage.setItem("image", reader.result);

    // ✅ تحويل الصفحة
    window.location.href = "ticket.html";
  };

  reader.readAsDataURL(fileImage);

  return false;
}

window.onload = function () {

  const nameElement = document.getElementById("name");
  const emailElement = document.getElementById("email");
  const ticketNameElement = document.getElementById("name-ticket");
  const imageElement = document.getElementById("image");
  const githubElement = document.getElementById("github");

  // إذا كنا في index.html اخرج مباشرة
  if (
    !nameElement ||
    !emailElement ||
    !ticketNameElement ||
    !imageElement ||
    !githubElement
  ) {
    return;
  }

  let name = localStorage.getItem("name");
  let email = localStorage.getItem("email");
  let image = localStorage.getItem("image");
  let github = localStorage.getItem("github");

  if (!name) {
    window.location.href = "index.html";
    return;
  }

  nameElement.innerText = name;
  emailElement.innerText = email;
  ticketNameElement.innerText = name;
  imageElement.src = image;

  githubElement.innerHTML =
    `<i class="fa-brands fa-github"></i> ${github}`;
};
