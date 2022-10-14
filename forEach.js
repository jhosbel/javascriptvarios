const example = [
  { name: "jhosbel", lastname: "vargas", age: 30, course: "Web Development" },
  { name: "gustavo", lastname: "adolfo", age: 34, course: "Web Development" },
  { name: "jose", lastname: "antoino", age: 35, course: "vago" },
  { name: "fernando", lastname: "enrique", age: 30, course: "empresa" },
];

/* for(let i = 0; i < obj.length; i++){
  console.log(obj[i])
} */

const arry = []

example.forEach(e => arry.push(e.name + " " + e.lastname))

/* console.log(arry) */