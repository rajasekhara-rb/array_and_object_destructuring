
// Array destructuring 
let employee = ['Rajasekhara', 'Reddy', 24, 'Diploma', 'Full stack developer', 50000];

let firstName, lastName, age, degree, position, salary;

[firstName, lastName, age, degree, position, salary] = employee;
console.log(` USING ARRAY DESTRUCTURING
First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
Degree: ${degree}
Position: ${position}
Salary: ${salary} 
    `);


// object destructuring 
let employee1 = {
    firstName1: 'Rajasekhara',
    lastName1: 'Reddy',
    age1: 24,
    degree1: 'Diploma',
    position1: 'Full stack developer',
    salary1: 50000
}

let { firstName1, lastName1, age1, degree1, position1, salary1} = employee1;

console.log(`USING OBJECT DESTRUCTURING
First Name: ${firstName1}
Last Name: ${lastName1}
Age: ${age1}
Degree: ${degree1}
Position: ${position1}
Salary: ${salary1} 

`)

