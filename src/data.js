const statusP = (num) => {
  if (num <= 60) {
    return 'Insuficiente';
  } else if (num <= 89) {
    return 'Suficiente';
  } else if (num >= 90) {
    return 'Destacado';
  } else
    return 'No hay info';
};

const students = [];
const generations = [];
let topic;
let cp;
const sum = [];

window.data = {

  computeStudentsStats: (laboratoria) => {
    // Aquí van todas las funciones para sacar promedios de las estudiantes
    for (key in laboratoria) {
      let campus = key;
      // console.log(obj.campus);
      let generations = (laboratoria[key].generacion);
      // console.log(generations);
      for (gen in generations) {
        let studentsArr = generations[gen].estudiantes;
        for (topics of studentsArr) {
          topic = topics.progreso.temas;
          for (item in topic) {
            cp = topic[item];
            // console.log(topic[item])
          }
        };
        studentsArr.forEach(student => {
          // console.log(gen, key);
          const obj = {
            name: student.nombre,
            email: student.correo,
            campus: key,
            generation: gen,
            stats: {
              status: statusP(student.progreso.porcentajeCompletado),
              completedPercentage: student.progreso.porcentajeCompletado,
              temas: topic,
              topic: {
                completedPercentage: cp,
              },
            },
          };
          students.push(obj);
        });
      }
    }
    return students;
  },

  computeGenerationsStats: (laboratoria) =>{
    for (key in laboratoria) {
      let campus = key;
      let generation = laboratoria[key].generacion;
      for (gen in generation) {
        let generationsArr = generation[gen].estudiantes;
        generationsArr.forEach(generation => {
          let completedPercentageByStudent = generation.progreso.porcentajeCompletado;
          // console.log(completedPercentageByStudent)
          sum.push(completedPercentageByStudent);
          // console.log(completedPercentageByStudent)
        });
        // for (item of generationsArr) {
        //   item = topics.progreso.porcentajeCompletado;
        //   // console.log(item);
        //
        // }
      }
      // generations.push({'campus': key,
      //  'generation': generation,
      //  'completedPercentage': average,
      //  });
    }
    // console.log(generations);
    // console.log(generations)
    let result = sum.reduce((a, b) => a + b) / 134;
    let average = Math.round(result);
    console.log(result);
    console.log(average);
  },

  sortStudents: (students, orderBy, orderDirection) => {
  },

  filterStudents: (students, search) => {

  },
};
