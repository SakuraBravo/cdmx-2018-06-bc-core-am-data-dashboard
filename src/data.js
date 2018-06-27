//Get the contries wheres laboratoria has headquarters
let sedes = []
const getContries = (campuses) => {
    fetch (`https://api.myjson.com/bins/130m4m`)
    .then(res => res.json())
    .then (data =>{
      for (let contries in data){
        document.getElementById('demo').innerHTML = contries
        sedes.push(contries)
    }
  })
    .catch(err => console.error('Houston, we a problem'))
    console.log(sedes)
};
//Get Student Stats Generation and 
const computeStudentsStats = (laboratoria) => {
  fetch ('https://api.myjson.com/bins/130m4m')
  .then (res => res.json())
  .then (data => {
    let sedes = []
    for (let item in data){
      document.createElement('div')
      document.getElementById('demo').innerHTML = item
      //data.lima.generacion.cuarta.estudiantes.forEach(user =>
    //  console.log(`${user.nombre} ${user.correo} ${user.progreso.porcentajeCompletado}`))

    //  let sedes =


    console.log(item)
    //.map
    }
  }
)//
  .catch (err => console.error('Houston, we have a problem'))
};
//Generation Stats
const computeGenerationsStats = (laboratoria) => {

};
//Sort Students
const sortStudents = (students, orderBy, orderDirection) => {

};
//Filter Students
const filterStudents = (students, search) => {

};
