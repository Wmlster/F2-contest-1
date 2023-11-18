let data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log("Users whose profession is developer:");

  data.forEach((user) => {
    if (user.profession === "developer") {
      console.log(user);
    }
  });
}

// 2. Add Data
function addData() {
  let obj = {};

  let name = prompt("Enter name: ");
  obj.name = name;

  let age = prompt("Enter age: ");
  age = parseInt(age);
  obj.age = age;

  let profession = prompt("Enter profession: ");
  obj.profession = profession;

  data.push(obj);

  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter((user) => user.profession != "admin");

  console.log(data);
}

// 4. Concatenate Array
function concatenateArray() {
  let DummyArray = [
    { name: "Mike", age: 25, profession: "developer" },
    { name: "Jerry", age: 28, profession: "student" },
  ];

  data = data.concat(DummyArray);

  console.log("New concatinated data:");
  console.log(data);
}

// 5. Average Age
function averageAge() {
  let AverageAge = 0;

  for (let i = 0; i < data.length; i++) {
    AverageAge += data[i].age;
  }

  console.log("Average Age of users from given data:");
  console.log(AverageAge / data.length);
}

// 6. Age Check
function checkAgeAbove25() {
  let isage = 0;

  data.forEach((user) => {
    if (user.age > 25) {
      isage = 1;
      console.log(true);
      console.log(user);
    }
  });

  if (!isage) {
    console.log(false);
  }
}

// 7. Unique Professions
function uniqueProfessions() {
  let Professions = [];

  data.forEach((user) => {
    if (!Professions.includes(user.profession)) {
      Professions.push(user.profession);
    }
  });

  console.log("Unique Professions:");
  console.log(Professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => {
    return a.age - b.age;
  });

  console.log("Sorted data:");
  console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((user) => {
    if (user.name === "john") {
      user.profession = "manager";
    }
  });

  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let DevelopersCount = 0;
  let AdminsCount = 0;

  data.forEach((user) => {
    if (user.profession === "developer") {
      DevelopersCount++;
    }
    if (user.profession === "admin") {
      AdminsCount++;
    }
  });

  console.log("DevelopersCount from user data : " + DevelopersCount);
  console.log("AdminsCount from user data : " + AdminsCount);
}
