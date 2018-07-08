const statusP = (num) => {
    if (num <= 60){
      return 'Insuficiente'
    }else if (num <= 89){
      return 'Suficiente'
    }else if (num >= 90){
      return 'Destacado'
    }else
    return 'No hay info'
  }

const students = [];
const generation = [];
let topic;
let cp;

window.data = {

  computeStudentsStats : (laboratoria) => {
    //_____ Aquí van todas las funciones para sacar promedios de las estudiantes
    for(key in laboratoria){
      let campus = key;
      //console.log(obj.campus);
      let generations =(laboratoria[key].generacion);
      //console.log(generations);
      for (gen in generations){
        let studentsArr = generations[gen].estudiantes;
        for (topics of studentsArr){
        topic = topics.progreso.temas;
          for(item in topic) {
            cp = topic[item];
          }
        };
        studentsArr.forEach(student => {
          //console.log(gen, key);
          const obj = {
            name : student.nombre,
            email: student.correo,
            campus: key,
            generation : gen,
            stats : {
              status : statusP(student.progreso.porcentajeCompletado),
              completedPercentage: student.progreso.porcentajeCompletado,
              temas : topic,
              topic : {
                completedPercentage : cp,
              },
            },
          }
          students.push(obj);
        })
      }
    }
    console.log('Array Students', students);
    return students.campus.generacion;
  },

  computeGenerationsStats : (laboratoria) =>{


  },

  sortStudents : (students, orderBy, orderDirection) => {
  },

  filterStudents :(students, search) => {

  },
}
