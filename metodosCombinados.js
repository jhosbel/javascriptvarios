const example9 = [
  { name: "jhosbel", lastname: "vargas", age: 30, course: "Web Development" },
  { name: "gustavo", lastname: "adolfo", age: 34, course: "Web Development" },
  { name: "jose", lastname: "antoino", age: 35, course: "vago" },
  { name: "fernando", lastname: "enrique", age: 27, course: "empresa" },
];

const result8 = example9.map(({ name, lastname, age }) => ({
  fullname: `${name} ${lastname}`,
  age,
}))
.filter(e => e.age < 32)
.sort((a, b) => a.age - b.age)


console.log(result8)