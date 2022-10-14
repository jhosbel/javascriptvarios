const example5 = [
    { name: "jhosbel", lastname: "vargas", age: 30, course: "Web Development" },
    { name: "gustavo", lastname: "adolfo", age: 34, course: "Web Development" },
    { name: "jose", lastname: "antoino", age: 35, course: "vago" },
    { name: "fernando", lastname: "enrique", age: 27, course: "empresa" },
  ];

  /* const result3 = example5.sort((a, b) => a.age > b.age ? 1 : -1) */
  const result3 = example5.sort((a, b) => a.age - b.age)

  /* console.log(result3) */