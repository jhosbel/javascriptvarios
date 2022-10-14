const example4 = [
    { name: "jhosbel", lastname: "vargas", age: 30, course: "Web Development" },
    { name: "gustavo", lastname: "adolfo", age: 34, course: "Web Development" },
    { name: "jose", lastname: "antoino", age: 35, course: "vago" },
    { name: "fernando", lastname: "enrique", age: 27, course: "empresa" },
  ];

  const development = [
    {
        id: 1,
        name: "John",
        skills: ['HTML', 'CSS', 'JavaScript', 'Java']
    },
    {
        id: 2,
        name: "Jack",
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Java']
    },
    {
        id: 3,
        name: "Jhosbel",
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Java']
    },
  ]

 /*  let num = 0 */
  /* for(let i = 0; i < example4.length; i++){
    num += example4[i].age
  }

  console.log(num) */

 /*  const result3 = example4.reduce((num, exam) => num + exam.age, 0)
  console.log(result3) */

  const result4 = development.reduce((allskills, student) => Array.from(new Set([...allskills, ...student.skills])),[])
  /* console.log(result4) */
