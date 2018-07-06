window.data = {
 computeStudentsStats : (laboratoria) => {
//Esta funcion retorna campus y generacion
const students = [];
let newArr;
for (key in laboratoria){
  let generations = (laboratoria[key].generacion);
  for (gen in generations){
    let studentsArr = generations[gen].estudiantes;
    studentsArr.forEach(student => {
      const obj ={
        name: student.nombre,
        email: student.correo,
        campus: key,
        generation: gen,
        stats: {
          completedPercentage: student.progreso.porcentajeCompletado,
          topics: {
            completedPercentage: '',
            percentageDuration:'',
            subTopics:{
              completedPercentage:'',
              type: '',
              duration: ','
            },
          },
        },
      }
      students.push(obj);
    })
  }
}
console.log('Arr Students', students)
return students;
},
computeGenerationsStats: (laboratoria) =>{

},

sortStudents:(laboratoria) => {

},

filterStudents:() => {

},
}
