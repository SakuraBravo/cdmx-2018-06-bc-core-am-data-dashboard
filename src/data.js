// Funciones Globales de Data Dashboard
// __Formula para obtener el status de las alumnas
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

const suma = [];
let topic;
let cp;
let objeto;
let result;

// Formula para obtener el arreglo de objeto de cada estudiante
window.computeStudentsStats = (laboratoria) => {
  const students = [];
  // Decidimos usar for in en lugar de Object.keys por que ya hay un método para
  // iterar dentro de un objeto así que no es necesario convertirlo a un arreglo.
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
        // se itera por cada arreglo de estudiante y se obtiene un objeto
        let obj = {
          name: student.nombre,
          email: student.correo,
          campus: key,
          generation: gen,
          stats: {
            status: statusP(student.progreso.porcentajeCompletado), // Invocamos la formula de status
            completedPercentage: student.progreso.porcentajeCompletado,
            topics: topic,
            topic: {
              completedPercentage: cp, // Si son los subtemas pero no están divididos por estudiante
            },
          },
        };
        students.push(obj);
      });
    }
  }
  // console.log('Array con Objetos', students);
  return students;
};

window.computeGenerationsStats = (laboratoria) => {
// DeVolver un nuevo arreglo de generaciones
// Creamos el objeto primero
// const generations = {
//   generation: null,
//   campus: null,
//   count: null,
//   average: null
// };
//
// for (key in laboratoria) {
//   generations.campus = keys;
//   console.log(generations);
//   for (item in laboratoria[key].generacion){
//
//   }
// }

  const generation = [];
  // Haremos uso de Object.keys ya que no conseguimos crear un un arreglo de cada sede con sus generaciones
  // con for in sólo conseguimos los arreglos individuales de las generaciones.

  let campusArr = Object.keys(laboratoria); // Pasamos de un objeto a un arreglo
  // console.log(campusArr); // Arreglos de Lima, México y Santiago
  for (i = 0; i < campusArr.length; i++) {
    let campus = campusArr[i]; // Objetos Lima, México y Santiago
    let generacionesArr = Object.keys(laboratoria[campusArr[i]].generacion);// Tres arreglos de cuarta, quinta y tercera

    // Ya que estamos en las generaciones iteramos dentro de ellas con un for anidado:
    for (j = 0; j < generacionesArr.length; j++) {
      let generaciones = generacionesArr[j]; // Objetos de generaciones
      let estudiantesArr = laboratoria[campusArr[i]].generacion[generacionesArr[j]].estudiantes; // 9 Arreglos con objetos de estudiantes.

      // Dentro de la iteración vamos a crear un objeto.
      let obj = {
        campus: campus,
        generation: generaciones,
        average: 0,
        count: 0
      };
      // Dentro de la iteración vamos a generar la formula para obtener promedio "average" con el método reduce()
      let suma = estudiantesArr.reduce((valorAnterior, valorActual) => {
        return valorAnterior + valorActual.progreso.porcentajeCompletado;
      }, 0); // Nota: Comenzamos con el índice 0

      // Inyectamos al objeto en su propiedad average con el promedio de cada sede y redondeamos el número con Math.round
      obj.average = Math.round(suma / estudiantesArr.length);

      // Inyectamos al objeto en su propiedad count con el total de estudiantes por generación
      obj.count = estudiantesArr.length;

      // Empujamos la información de cada objeto a nuestro arreglo generations
      generation.push(obj);
    };
  };
  // console.log(generation);
  return generation; // Tienen que regresar 9 objetos
};

window.sortStudents = (students, orderBy, orderDirection) => {
  // console.log(students);
};

window.filterStudents = (students, search) => {
  let findStudent = students.filter(element => {
    return element.name == search;
  });
  return findStudent;
};
