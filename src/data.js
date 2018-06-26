//contries
/*const getContries = (campuses) => {
  //let campuses =
  //for (let i = 0; i < campuses.length; i++){
    fetch (`https://api.laboratoria.la/campuses`)
    .then(res => res.json())
    .then (data => console.log(data))
    .catch(err => console.error('Houston, we a problem'))
  };*/
//Student Stats
const url = 'https://api.myjson.com/bins/130m4m'
const computeStudentsStats = (laboratoria) => {
  fetch (url)
  .then (res => res.json())
  .then (data => {
    let sedes = []
    for (var item in data){
      let sedes = 


    console.log(item)
    //.map
    }
  }
    //data.lima.generacion.cuarta.estudiantes.forEach(user =>
    //  console.log(`${user.nombre} ${user.correo} ${user.progreso.porcentajeCompletado}`))
  )
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
