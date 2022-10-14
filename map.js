const example2 = [
    { name: "jhosbel", lastname: "vargas", age: 30, course: "Web Development" },
    { name: "gustavo", lastname: "adolfo", age: 34, course: "Web Development" },
    { name: "jose", lastname: "antoino", age: 35, course: "vago" },
    { name: "fernando", lastname: "enrique", age: 30, course: "empresa" },
  ];

  /* const result = example.map(e => e.name + " " + e.lastname) */

  /* const result = example2.map(e => {
    return {
        fullname: e.name + " " + e.lastname,
        age: e.age,
        course: e.course
    }
  }) */

  const result = example2.map(e => ({...e, course: "Programing"}))
/*   console.log(example2)
  console.log(result) */