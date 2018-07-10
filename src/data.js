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

// Formula para obtener el promedio general dependiendo de la cantidad de estudiantes que se ingresen
// const averageFormula = ('sumaDeArray','diviciónEntreEstudiantes.length') => {
//
// };
const suma = [];
let topic;
let cp;
let obj;
let objeto;
let result;

const students = [];
const generations = [];
let topic;
let cp;
const sum = [];

window.computeStudentsStats = (laboratoria) => {
  const students = [];
  for (key in laboratoria) {
    let campus = key;
    // console.log(obj.campus);
    let generations = (laboratoria[key].generacion);
    // console.log(generations);
    for (gen in generations) {
      let studentsArr = generations[gen].estudiantes;
      for (topics of studentsArr) {
        topic = topics.progreso.temas;
        // console.log(topic);
        for (item in topic) {
          cp = topic[item];
          // console.log(cp);
        }
      };
      studentsArr.forEach(student => {
        // console.log(gen, key);
        obj = {
          name: student.nombre,
          email: student.correo,
          campus: key,
          generation: gen,
          stats: {
            status: statusP(student.progreso.porcentajeCompletado),
            completedPercentage: student.progreso.porcentajeCompletado,
            topics: topic,
            topic: {
              completedPercentage: cp,
            },
          },
        };
        // console.log(student.name)
        // let arr = obj.stats.completedPercentage;
        // // console.log(arr);
        // suma.push(arr);
        students.push(obj);
      });
    }
  }
  console.log('Array con Objetos', students);
  return students;
};

window.computeGenerationsStats = (laboratoria) => {
  const generation = [];
  const suma = [];
  for (key in laboratoria) {
    let campus = key;
    let generations = (laboratoria[key].generacion);
    for (gen in generations) {
      let generationArr = generations[gen].estudiantes;
      for (averages of generationArr) {
        average = averages.progreso.porcentajeCompletado;
        //   for (numbers in average) {
        //     result = average[numbers].reduce((i, j) => i + j);
        //     console.log(result);
        //   }
      };
      generationArr.forEach(item => {
        objeto = {
          campus: key,
          generation: gen,
          average: '',
          count: '',
          // average: averageFormula(item.progreso.porcentajeCompletado, item.length),
          completedPercentage: item.progreso.porcentajeCompletado,
        };
        generation.push(objeto);
      });
    }
  }
  return generation;
  // console.log(generation);
};

window.sortStudents = (students, orderBy, orderDirection) => {
  // console.log(students);
};

window.filterStudents = (students, search) => {
  // console.log(students);
};