const dbUsers = [
  { name: "João", age: 32 },
  { name: "Maria", age: 28 },
  { name: "Pedro", age: 25 },
];

showUsers(dbUsers);

function showUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const li = document.createElement("li");
    li.textContent = `Nome: ${user.name} - Idade: ${user.age}`;
    userList.appendChild(li);
  }
}

function deleteUser() {
  const users = dbUsers;
  users.pop();
  showUsers(users);
}

function createUser() {
  const name = document.getElementById("name");
  const age = document.getElementById("age");
  if (name.value && age.value) {
    dbUsers.push({ name: name.value, age: age.value });
    showUsers(dbUsers);
    name.value = "";
    age.value = "";
  } else{
    
  }
  
}

