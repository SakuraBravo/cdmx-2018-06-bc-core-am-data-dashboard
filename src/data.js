window.data = {
  computeStudentsStats: (laboratoria) => {
    fetch ('https://api.myjson.com/bins/130m4m')
    .then (res => res.json())
    .then (data => {
      for (key in data){
      let contries = key
      let generations = data[key].generacion
      let printContries = document.getElementById('sedes')
      let showContries = document.createElement('li')
      showContries.innerHTML = contries
      printContries.appendChild(showContries)
      let printGenerations = document.getElementById('demo')//Variable para Manipular DOM
      let showGenerations = document.createElement('li')//Variable para Manipular DOM
      showGenerations.innerHTML = Object.keys(generations)
      printGenerations.appendChild(showGenerations)

      }
    }
  )}
      //  item.hasOwnProperty('generacion')

    // let laboratoria = data
    //   console.log(laboratoria)
    //   for (let item in laboratoria){
    //     item.generacion.forEach(user =>
    //     console.log((`${user.nombre} ${user.correo} ${user.progreso.porcentajeCompletado}`)));
    //     console.log(item)
    //     //imprimir sedes
    //     //condicionar de si tiene propiedad con hasOwnProperty
    //     console.log(laboratoria[item]['generacion'])

      // for (let i =0; i < laboratoria; i++){
      //   let items = laboratoria[i].length
      //   data.[lima].generacion.[cuarta].estudiantes.forEach(user =>
      // console.log((`${user.nombre} ${user.correo} ${user.progreso.porcentajeCompletado}`));
      // //.map
      // data.mexico.generacion.cuarta.estudiantes.forEach(user =>

  // computeGenerationsStats: (laboratoria) =>{
  //
  // },
  //
  // sortStudents: (students, orderBy, orderDirection) => {
  //
  // },
  //
  // filterStudents: (students, search) => {
  //
  // }
}
