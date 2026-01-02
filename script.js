const API_URL = "http://localhost:3000/users";
const table = document.getElementById("userTable");
const form = document.getElementById("userForm");

// Fetch and display users
function loadUsers() {
  fetch(API_URL)
    .then(res => res.json())
    .then(users => {
      table.innerHTML = "";
      users.forEach(user => {
        table.innerHTML += `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.company}</td>
            <td>${user.role}</td>
            <td>
              <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    });
}

// Add user (POST)
form.addEventListener("submit", e => {
  e.preventDefault();

  const newUser = {
    name: name.value,
    age: age.value,
    company: company.value,
    role: role.value
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser)
  })
  .then(res => res.json())
  .then(() => {
    form.reset();
    loadUsers(); // refresh table
  });
});

// Delete user (DELETE)
function deleteUser(id) {
  fetch(`${API_URL}/${id}`, { method: "DELETE" })
    .then(() => loadUsers());
}

// Load users on page load
loadUsers();
