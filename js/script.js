let empId = document.getElementById("employeeId");
let fullName = document.getElementById("name");
let extention = document.getElementById("ext");
let email = document.getElementById("emailAddress");
let dept = document.getElementById("department");
window.addEventListener("load", (init) => {
  document.getElementById("empForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(`ID: ${empId.value}`);
    console.log(`Name: ${fullName.value}`);
    console.log(`Extension: ${extention.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Department: ${dept.value}`);
  });
});
