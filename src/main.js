
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

      listeners(generations, students);
    })
    .catch((error) => {
      console.log('Houston we have a problem', error);
    });
};
getData(url);
// --FUNCIÓN PARA Inyectar llamar los botones e inyectar la data a los eventos.
const listeners = (generations, students) =>{
  // Función para darle a todos los botones un evento de click.
  const buttonsCampus = document.getElementsByClassName('campus-button');
  const arrayButtons = Array.from(buttonsCampus); // Identifica los tres botones en el menu

  arrayButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
      const campus = event.target.innerHTML.toLowerCase();// Imprime el nombre del campus por cada botón, se le agregó un toLowerCase para que la info obtenida tenga similitud a la data del json
      drawStatusSedes(generations, campus, students); // Invoco la función que me va a inprimir las sedes.
    });
  });
};

// Función para imprimir las sedes con datos duros.
const drawStatusSedes = (generations, campus, students) => {
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
  // Imprimo tabla de estudiantes
  const containerAllStudents = document.getElementById('print');
  containerAllStudents.innerHTML = '';

  studentsByCountry.forEach((student) =>{
    console.log(`${student.name},${student.email},${student.stats.status},${student.stats.completedPercentage}`);
    containerAllStudents.innerHTML += `
      <tr>
      <th scope="col"> ${student.name}</th>
           <th scope="col"> ${student.email}</th>
           <th scope="col"> ${student.stats.status}</th>
           <th scope="col"> ${student.stats.completedPercentage}%</th>
      </tr>
      `;
  });

  const templateGeneration = '';
  filterGenration.forEach((gen) => {
    // const containerCountStudents = document.getElementById('div1');
    // console.log(gen);
    // containerCountStudents.innerHTML =  gen.;
    // templateGeneration += `${gen.div1}`;
  });
};;


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

// Funciones para Status
let lowerStudentsArrLima = [];
let averageStudentsArrLima = [];
let overStudentsArrLima = [];
let lowerStudentsArrMexico = [];
let averageStudentsArrMexico = [];
let overStudentsArrMexico = [];


const studentsStatusLima = (students) =>{
  students.forEach(student => {
    let studentPercentage = student.stats.completedPercentage;
    let studentCampus = student.campus;
    if (studentPercentage <= 60 && studentCampus === 'lima') {
      lowerStudentsArrLima.push(student.name);
    } else if (studentPercentage <= 89 && studentCampus === 'lima') {
      averageStudentsArrLima.push(student.name);
    } else if (studentPercentage >= 90 && studentCampus === 'lima') {
      overStudentsArrLima.push(student.name);
    }
  });
};
const studentsStatusMexico = (students) => {
  students.forEach(student => {
    let studentPercentage = student.stats.completedPercentage;
    let studentCampus = student.campus;
    if (studentPercentage <= 60 && studentCampus === 'mexico') {
      lowerStudentsArrMexico.push(student.name);
    } else if (studentPercentage <= 89 && studentCampus === 'mexico') {
      averageStudentsArrMexico.push(student.name);
    } else if (studentPercentage >= 90 && studentCampus === 'mexico') {
      overStudentsArrMexico.push(student.name);
    }
  });
};
const studentsStatusSantiago = (students) => {
  let lowerStudentsArrSantiago = [];
  let averageStudentsArrSantiago = [];
  let overStudentsArrSantiago = [];
  const studentsSantiago = [];
  const santiagoTotalStudents = (students) => {
    students.forEach(student => {
      if (student.campus === 'santiago') {
        studentsSantiago.push(students.name);
      }
    });
  };

  students.forEach(student => {
    let studentPercentage = student.stats.completedPercentage;
    let studentCampus = student.campus;
    if (studentPercentage <= 60 && studentCampus === 'santiago') {
      lowerStudentsArrSantiago.push(student.name);
    } else if (studentPercentage <= 89 && studentCampus === 'santiago') {
      averageStudentsArrSantiago.push(student.name);
    } else if (studentPercentage >= 90 && studentCampus === 'santiago') {
      overStudentsArrSantiago.push(student.name);
    }
  });
};
// ___BOTONES___
// Funciónes para los botones super califragilística y espialidosos que colapsan en menu Bootstrap
$('#menu-toggle').click(function(event) {
  event.preventDefault();
  $('#wrapper').toggleClass('toggled');
});
