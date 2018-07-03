window.data = {
 computeStudentsStats : (laboratoria) => {
//_____ Aquí van todas las funciones para sacar promedios de las estudiantes

    let sedes = Object.keys(laboratoria); // Sedes ya es un arreglo.
    //document.getElementById("demo").innerHTML = sedes[2];
    //console.log(sedes);
         //let sedeNames = Object.getOwnPropertyNames(laboratoria);

//----Obtengo los campus
    for (info in laboratoria){
      //console.log(info)
      let generations = Object.keys(laboratoria[info].generacion); // Sedes ya es un arreglo.

      //console.log(generations);
      // generations.forEach(info) => {
      //   let students = generacion[info].estudiantes;
      //   console.log(students);
      // }
  }
//console.log(gen);

         //return students = [campus,generacio]
        // return students = [stats]
},

computeGenerationsStats : (laboratoria) =>{
  for(key in laboratoria){
    let contries = key;
    let generations = laboratoria[key].generacion;
    console.log(contries);
    console.log(generations);
  }

},
sortStudents : (laboratoria) => {

},

filterStudents :() => {

  },