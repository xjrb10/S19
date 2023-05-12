console.log("Hello World");

let username, password, role;

function login() {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role (admin, teacher, or student):");

  if (!username || !password || !role) {
    alert("Input should not be empty.");
	return;
  }
  switch (role) {
    case "admin":
      alert("Welcome back to the class portal, admin!");
      break;
    case "teacher":
      alert("Thank you for logging in, teacher!");
      break;
    case "student":
      alert("Welcome to the class portal, student!");
      break;
    default:
      alert("Role out of range.");
  }
}

login();

function gradeLetter(grade) {
	if (grade >= 96) return "A+";
	if (grade >= 90) return "A";
	if (grade >= 85) return "B";
	if (grade >= 75) return "C"; // bridge gap between range 75 <= x < 85
	if (grade <= 74) return "F";
}

function averageNumbers(...items) {
	return items.reduce((a, b) => a + b, 0) / items.length;
}

function gradeAverage(...grades) {
	let average = averageNumbers(...grades);
	console.log(`Before rounding: ${average}`);
	average = Math.round(average);
	console.log(`After rounding: ${average}`);
	alert(`Hello, student, your average is ${average}. The letter equivalent is ${gradeLetter(average)}`);
}

let grades = [];
for (let i = 1; i <= 4; i++) {
	grades.push(parseInt(prompt(`Enter grade#${i}:`)));
}
gradeAverage(...grades);
