const accounts = [];
const courses = [
  { name: "Power BI", price: 2000, time: "10AM", seats: 5 },
  { name: "MSSQL", price: 1800, time: "11AM", seats: 5 },
  { name: "Tableau", price: 2200, time: "2PM", seats: 4 },
  { name: "Java", price: 2500, time: "3PM", seats: 6 },
  { name: ".NET", price: 2400, time: "1PM", seats: 3 },
  { name: "C", price: 1500, time: "9AM", seats: 4 },
  { name: "C++", price: 1600, time: "4PM", seats: 5 }
];

let currentUser = null;
let selectedCourse = null;

function showPage(pageId) {
  document.querySelectorAll('#container > div').forEach(div => {
    div.style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}

function createAccount() {
  const user = document.getElementById('newUsername').value;
  const pass = document.getElementById('newPassword').value;

  if (accounts.length >= 4) {
    alert("Account limit reached!");
    return;
  }

  accounts.push({ user, pass });
  alert("Account created!");
  showPage('loginPage');
}

function login() {
  const user = document.getElementById('loginUsername').value;
  const pass = document.getElementById('loginPassword').value;

  const found = accounts.find(acc => acc.user === user && acc.pass === pass);
  if (found) {
    currentUser = user;
    loadDashboard();
    showPage('dashboard');
  } else {
    alert("Invalid login!");
  }
}

function loadDashboard() {
  const listDiv = document.getElementById('courseList');
  listDiv.innerHTML = '';
  courses.forEach(course => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4>${course.name}</h4>
      <p>Price: ₹${course.price}</p>
      <p>Time: ${course.time}</p>
      <p>Seats Available: ${course.seats}</p>
      <button onclick="selectCourse('${course.name}')">Select</button>
    `;
    listDiv.appendChild(div);
  });
}

function selectCourse(courseName) {
  selectedCourse = courseName;
  document.getElementById('selectedCourse').innerText = courseName;
  showPage('paymentPage');
}

function makePayment() {
  document.getElementById('welcomeMessage').innerText = `Welcome to ${selectedCourse}`;
  showPage('welcomePage');
}



