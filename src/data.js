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
  // CREACION DE ESTOS ARRAYS PARA REDONDEAR CON EL LARGO TOTAL DEL ARRAY STUDENTS Y PODER INYECTARLO EN LAS BARRAS DE PROGRESO
  const mexicoLowStatus = [];
  const mexicoAvgStatus = [];
  const mexicoOverStatus = [];
  const limaLowStatus = [];
  const limaAvgStatus = [];
  const limaOverStatus = [];
  const santiagoLowStatus = [];
  const santiagoAvgStatus = [];
  const santiagoOverStatus = [];
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
        // Formula para crear un arreglo con cada estudiante que cumpla los parametros por Sede y Status(Insuficiente, Suficiente, Destacado)
        if (campus === 'mexico' && obj.stats.status === 'Insuficiente') {
          mexicoLowStatus.push(obj.name);
        } else if (campus === 'mexico' && obj.stats.status === 'Suficiente') {
          mexicoAvgStatus.push(obj.name);
        } else if (campus === 'mexico' && obj.stats.status === 'Destacado') {
          mexicoOverStatus.push(obj.name);
        };
        if (campus === 'lima' && obj.stats.status === 'Insuficiente') {
          limaLowStatus.push(obj.name);
        } else if (campus === 'lima' && obj.stats.status === 'Suficiente') {
          limaAvgStatus.push(obj.name);
        } else if (campus === 'lima' && obj.stats.status === 'Destacado') {
          limaOverStatus.push(obj.name);
        };
        if (campus === 'mexico' && obj.stats.status === 'Insuficiente') {
          santiagoLowStatus.push(obj.name);
        } else if (campus === 'mexico' && obj.stats.status === 'Suficiente') {
          santiagoAvgStatus.push(obj.name);
        } else if (campus === 'mexico' && obj.stats.status === 'Destacado') {
          santiagoOverStatus.push(obj.name);
        };
        // console.log(campus);
        //  console.log(obj.stats.status);
        // console.log(obj.name);
      });
    }
  }
  // console.log('Array con Objetos', students);
  console.log('Mexico Insuficientes', mexicoLowStatus);
  console.log('Mexico Suficientes', mexicoAvgStatus);
  console.log('Mexico Destacadas', mexicoOverStatus);
  console.log('Lima Insuficientes', limaLowStatus);
  console.log('Lima Suficientes', limaAvgStatus);
  console.log('Lima Destacadas', limaOverStatus);
  console.log('Santiago Insuficientes', santiagoLowStatus);
  console.log('Santiago Suficientes', santiagoAvgStatus);
  console.log('Santiago Destacadas', santiagoOverStatus);
  return students;
};

window.computeGenerationsStats = (laboratoria) => {
  const generation = [];
  const mexicoGen = [];
  const limaGen = [];
  const santiagoGen = [];
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
  //  console.log(generation);
  return generation; // Tienen que regresar 9 objetos


// Función antes de la refactorización (como documentación del esfuerzo realizado)
// window.computeGenerationsStats = (laboratoria) => {
//   const generation = [];
//
//   for (key in laboratoria) {
//     let campus = key;
//
//     let generations = (laboratoria[key].generacion);
//
//
//     for (gen in generations) {
//
//       let generationArr = generations[gen].estudiantes;
//       for (averages of generationArr) {
//         average = averages.progreso.porcentajeCompletado;
//         // console.log(average);
//         //   for (numbers in average) {
//         //     result = average[numbers].reduce((i, j) => i + j);
//         //     console.log(result);
//         //   }
//       };
//
// generationArr.forEach(item => {
//         objeto = {
//           campus: key,
//           generation: gen,
//           average: 0,
//           count: 0,
//         };
//         generation.push(objeto);
//       });
//     }
//   }
//   console.log(generation);
//   return generation;
// };
};
// FORMULA PARA MOSTRAR ALUMNAS POR NOMBRE ASCEDENDTE Y DESCENDENTE, ES UN METODO DE JAVASCRIPT LLAMADO SORT
window.sortStudents = (students, orderBy, orderDirection) => {
  if (orderBy === 'name' && orderDirection === 'ASC') {
    let studentsName = students.sort(a, b => {
      let currentName = a.name.toUpperCase();
      let newName = b.name.toUpperCase();
      if (currentName < newName) {
        return -1;
      } else if (currentName > newName) {
        return 1;
      } else {
        return 0;
      } ;
    });
    return studentsName
  }
  if (orderBy === 'name' && orderDirection === 'DESC') {
    let studentsName = students.sort(a, b => {
      let currentName = a.name.toUpperCase();
      let newName = b.name.toUpperCase();
      if (currentName < newName) {
        return 1;
      } else if (currentName > newName) {
        return -1;
      } else {
        return 0;
      } ;
    });
    return studentsName;
  };
};
// FORMULA PARA MOSTRAR FILTRAR ALUMNAS, ES UN METODO DE JAVASCRIPT LLAMADO FILTER
window.filterStudents = (students, search) => {
  let findStudent = students.filter(element => {
    return element.name === search;
  });
  return findStudent;
};
