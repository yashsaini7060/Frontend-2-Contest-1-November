const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  console.log("Developers :")
  const developers = data.forEach(person => {
    if(person.profession.toLowerCase() === "developer"){
      console.log(person)
    }
  });
}

// 2. Add Data
function addData() {
  const name = prompt("Enter Name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter Profession:");
  const newObj = {name, age, profession};
  data.push(newObj);
  console.log("Updated Array :");
  console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
  const fileredData = data.filter(person => person.profession.toLowerCase() !== "admin")
  console.log("Filtered Data :");
  console.log(fileredData);
}

// 4. Concatenate Array
function concatenateArray() {
  const array1 = [
    { name: "yash", age: 23, profession: "developer" },
    { name: "utkarsh", age: 23, profession: "tester" },
    { name: "shivang", age: 22, profession: "freelancer" },
    { name: "Utkarsh sharma", age: 21, profession: "developer" },
  ]
  const newArray = data.concat(array1);
  console.log("Concatenated Array :")
  console.log(newArray);
}

// 5. Average Age
function averageAge() {
  let sumOfAge = 0;
  let i=0;
  while(i<data.length){
    sumOfAge += data[i].age;
    i++;
  }
  const averageAge = sumOfAge/data.length;
  console.log("Average Age :");
  console.log(averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.filter(person => person.age> 25)
  console.log("People above 25 :");
  console.log(isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = data.map(person => person.profession);
  const uniqueProfessionsSet = new Set(professions);
  console.log("Unique professions :");
  console.log(Array.from(uniqueProfessionsSet));
}

// 8. Sort by Age
function sortByAge() {
  const sortedArray = data.sort((a, b) => a.age - b.age);
  console.log("Sorted Array by Age :");
  console.log(sortedArray)
}

// 9. Update Profession
function updateJohnsProfession() {
  const index = data.findIndex(person=> person.name.toLowerCase() === "john");
  data[index].profession = "manager";
  console.log("Updated John Profession :")
  console.log(data);
}

// 10. Profession Count
function getTotalProfessions() {
  let developersCount=0;
  let adminsCount=0;
  data.forEach(person => {
    if(person.profession.toLowerCase() === "developer")
      developersCount++;
    else if(person.profession.toLowerCase() === "admin")
      adminsCount++;
  })
  console.log("Developers Count :", developersCount);
  console.log("Admins Count :", adminsCount);
}
