// let correo = document.getElementById('email');
// let llave = document.getElementById('password');
// document.getElementById('enter').addEventListener('clik', userLaboratoria);
//
// const userLaboratoria = () => {
//    let mail = correo.value;
//    let password = llave.value;
//     if(mail == 'prueba@laboratoria.la' && password == '20181'){
//       return true;
//     } else{
//       alert ('!Usuario No encontrado!')
//     }
//   };
const url = 'https://raw.githubusercontent.com/SakuraBravo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
const getData = (data) => {
  fetch(data)
    .then(res => res.json())
    .then((laboratoria) => {
      // console.log(laboratoria);
      const students = computeStudentsStats(laboratoria);
      const generations = computeGenerationsStats(laboratoria);
      const sorted = sortStudents(laboratoria);
      // const avgStatus = studentsAvg(laboratoria);
      listeners(generations, students);
    })
    .catch((error) => {
      console.log('Houston we have a problem', error);
    });
};
getData(url);
// --FUNCIÓN PARA Inyectar llamar los botones e inyectar la data a los eventos.
const listeners = (generations, students) =>{
  // Función para darle a todos los botones de sedes un evento de click.
  const buttonsCampus = document.getElementsByClassName('campus-button');
  const arrayButtons = Array.from(buttonsCampus); // Identifica los tres botones en el menu

  arrayButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
      const campus = event.target.innerHTML.toLowerCase();// Imprime el nombre del campus por cada botón, se le agregó un toLowerCase para que la info obtenida tenga similitud a la data del json
      drawStatusSedes(generations, campus, students); // Invoco la función que me va a inprimir las sedes.
    });
  });

  // Función para darle a todos los botones de generación un evento de click.
  const buttonsGenerations = document.getElementsByClassName('generation');
  const arrayButtonsGeneration = Array.from(buttonsGenerations);

  arrayButtonsGeneration.forEach((button)=>{
    button.addEventListener('click', (event)=>{
      const generacion = event.target.innerHTML.toLowerCase();
      console.log(generacion);
      generations.forEach(campus =>{
        const studentsByCampus = campus.count;
        console.log(studentsByCampus);
      });
    });
  });
  // PARA CUESTIONES PRACTICAS SE MUESTRA ESTA FUNCION PARA DEMOSTRAR QUE SE SABE ACCEDER A LA DATA
  // EN EL FUTURO ESPERAMOS REFACTORIZAR PARA HACER UN CODIGO MAS SOFISTICADO
  students.map(student => {
    if (student.campus === 'mexico' && student.generation === 'quinta') {
      const containerAllStudents = document.getElementById('print');
      document.getElementById('fifth-mexico').addEventListener('click', (ev) => {
        // hay que remover childs para que quite las alumnas ateriores e imprim
        // containerAllStudents.innerHTML += `
        //   <tr>
        //   <th scope="col"> ${student.name}</th>
        //        <th scope="col"> ${student.email}</th>
        //        <th scope="col"> ${student.stats.status}</th>
        //        <th scope="col"> ${student.stats.completedPercentage}%</th>
        //   </tr>
        //   `;
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'mexico' && student.generation === 'cuarta') {
      document.getElementById('fourth-mexico').addEventListener('click', (ev) => {
        // containerAllStudents.innerHTML += `
        //   <tr>
        //   <th scope="col"> ${student.name}</th>
        //        <th scope="col"> ${student.email}</th>
        //        <th scope="col"> ${student.stats.status}</th>
        //        <th scope="col"> ${student.stats.completedPercentage}%</th>
        //   </tr>
        //   `;
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'mexico' && student.generation === 'tercera') {
      document.getElementById('third-mexico').addEventListener('click', (ev) => {
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'lima' && student.generation === 'quinta') {
      document.getElementById('fifth-lima').addEventListener('click', (ev) => {
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'lima' && student.generation === 'cuarta') {
      document.getElementById('fourth-lima').addEventListener('click', (ev) => {
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'lima' && student.generation === 'tercera') {
      document.getElementById('third-lima').addEventListener('click', (ev) => {
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'santiago' && student.generation === 'quinta') {
      document.getElementById('fifth-santiago').addEventListener('click', (ev) => {
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'santiago' && student.generation === 'cuarta') {
      document.getElementById('fourth-santiago').addEventListener('click', (ev) => {
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    } else if (student.campus === 'santiago' && student.generation === 'tercera') {
      document.getElementById('third-santiago').addEventListener('click', (ev) => {
        console.log(`${student.name} ${student.email} ${student.stats.status} ${student.stats.completedPercentage}%`);
      });
    }
  });
  // drawCountStudentsGen = document.getElementById('div1');
  // drawCountStudentsGen.innerHTML = campus.count
};

// FUNCIONES PARA IMPRIMIR DATOS EN DOM
// Función para asignar a los botones el valor de las sedes.
const drawStatusSedes = (generations, campus, students, generacion) => {
  const filterGenration = generations.filter((generation) =>{
    // Los métodos siempre tienen un return
    return generation.campus === campus;// Es campus porque está comparando con el evento detonado arriba
  });
  // console.log('Generaciones por sede', filterGenration);
  // Imprimo el número total de estudiantes por sede
  const countStudentsCountry = filterGenration.reduce((valorAnterior, valorActual)=>{
    return valorAnterior + valorActual.count;
  }, 0);
  const drawCountStudentsCountry = document.getElementById('div1');
  drawCountStudentsCountry.innerHTML = countStudentsCountry; // Total de estudiantes por sede

  // Imprimo el número de estudiantes dependiendo de su campus y de su status
  const studentsByCountry = students.filter((student) =>{
    return student.campus === campus; // Es campus porque está comparando con el evento detonado arriba
  });
  // console.log('Estudiantes por sede', studentsByCountry);
  //
  // const studentsByGeneration = studentsByCountry.filter((gen)=>{
  //   return generation.gen === generacion;
  // });
  // console.log('Estudiantes por generacion', studentsByGeneration);


  // Imprimo tabla de estudiantes totales por sede
  const containerAllStudents = document.getElementById('print');
  containerAllStudents.innerHTML = '';
  studentsByCountry.forEach((student) =>{
    // console.log(`${student.name},${student.email},${student.stats.status},${student.stats.completedPercentage}`);
    containerAllStudents.innerHTML += `
      <tr>
      <th scope="col"> ${student.name}</th>
           <th scope="col"> ${student.email}</th>
           <th scope="col"> ${student.stats.status}</th>
           <th scope="col"> ${student.stats.completedPercentage}%</th>
      </tr>
      `;
  });


  // Imprimo datos de estudiantes por generación.
  // console.log('Estudiantes por sede', studentsByCountry);

  const templateGeneration = '';
  filterGenration.forEach((gen) => {
    // const containerCountStudents = document.getElementById('div1');
    // console.log(gen);
    // containerCountStudents.innerHTML =  gen.;
    // templateGeneration += `${gen.div1}`;
  });
};
document.getElementById('sort').addEventListener('click', sortStudents());

// console.log(drawStatusSedes(studentsByCountry()));

// const drawStatusGeneration = (generations, campus, generacion, students) => {
//   // console.log(students);
//   const studentsBySede = students.filter((item) =>{
//     return item.campus === campus; // Es campus porque está comparando con el evento detonado arriba
//   });
//   // console.log('Estudiantes por sede', studentsByCountry);
// };

//
//   students.forEach(student => {
//     document.getElementById('third-generation').addEventListener('click', (event) => {
//       let result = '';
//       let printStudents = document.getElementById('third-generation-results');
//       if (student.campus === 'santiago' && student.generation === 'tercera') {
//         document.getElementsByTagName('h5')[0].innerHTML = 'Status Santiago Tercera Generación';
//         result += `<p>${student.name} ${student.email} ${student.stats.completedPercentage} ${student.stats.status}</p>`;
//         printStudents.innerHTML += result;
//       }
//     });
//   });
// };
// ___BOTONES___
// Funciónes para los botones super califragilística y espialidosos que colapsan en menu Bootstrap
$('#menu-toggle').click(function(event) {
  event.preventDefault();
  $('#wrapper').toggleClass('toggled');
});
