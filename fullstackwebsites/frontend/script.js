const apiUrl = "http://localhost:3000/users";

async function fetchUsers() {
  const res = await fetch(apiUrl);
  const users = await res.json();
  const table = document.getElementById("userTable");
  table.innerHTML = "";
  users.forEach((user, index) => {
    table.innerHTML += `<tr>
      <td>${index + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    </tr>`;
  });
}

async function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) return alert("Please enter both name and email");

  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  fetchUsers();
}

fetchUsers();

