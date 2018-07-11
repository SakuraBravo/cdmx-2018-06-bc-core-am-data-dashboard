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
      const students = window.computeStudentsStats(laboratoria);
      const generations = window.computeGenerationsStats(laboratoria);
      drawStudentsByCampus(students);
      studentsStatusLima(students);
      studentsStatusMexico(students);
      studentsStatusSantiago(students);
      santiagoTotalStudents(students);
      // const students = data.computeStudentsStats(laboratoria);
      window.sortStudents(students);
    })
    .catch((error) => {
      console.log('Houston we have a problem', error);
    });
};
getData(url);

// let dataResults = document.getElementById('data-results');
const drawStudentsByCampus = (students) =>{
  document.getElementById('lima-toggle').addEventListener('click', (event)=> {
    document.getElementsByTagName('h5')[0].innerHTML = 'Status México';
  });
  students.forEach(student => {
    document.getElementById('fifth-generation').addEventListener('click', (event) => {
      let result = '';
      let printStudents = document.getElementById('fifth-generation-results');
      if (student.campus === 'lima' && student.generation === 'quinta') {
        document.getElementsByTagName('h5')[0].innerHTML = 'Status México Quinta Generación';
        result += `<p>${student.name} ${student.email} ${student.stats.completedPercentage} ${student.stats.status}</p>`;
        printStudents.innerHTML += result;
      }
    });
  });
  students.forEach(student => {
    document.getElementById('fourth-generation').addEventListener('click', (event) => {
      let result = '';
      let printStudents = document.getElementById('fourth-generation-results');
      if (student.campus === 'lima' && student.generation === 'cuarta') {
        document.getElementsByTagName('h5')[0].innerHTML = 'Status Lima Cuarta Generación';
        result += `<p>${student.name} ${student.email} ${student.stats.completedPercentage} ${student.stats.status}</p>`;
        printStudents.innerHTML += result;
      }
    });
  });

  students.forEach(student => {
    document.getElementById('third-generation').addEventListener('click', (event) => {
      let result = '';
      let printStudents = document.getElementById('third-generation-results');
      if (student.campus === 'lima' && student.generation === 'tercera') {
        document.getElementsByTagName('h5')[0].innerHTML = 'Status Lima Tercera Generación';
        result += `<p>${student.name} ${student.email} ${student.stats.completedPercentage} ${student.stats.status}</p>`;
        printStudents.innerHTML += result;
      }
    });
  });
};
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
  console.log(lowerStudentsArrSantiago.length);
};


// console.log(studentsSantiago.length);

//   let result = parseInt((arr1.length * 100)/arr2.length);
//   return result
// };
// console.log(lowerStudentsArrSantiago.length,studentsSantiago.length);
// averageStudents(lowerStudentsArrSantiago,studentsSantiago)

// ___BOTONES___
// Funciónes para los botones super califragilística y espialidosos que colapsan en menu Bootstrap
$('#menu-toggle').click(function(event) {
  event.preventDefault();
  $('#wrapper').toggleClass('toggled');
});

$('#logo-lab').click(function(event) {
  event.preventDefault();
  $('#wrapper').toggleClass('toggled');
});

// Botón de Lima
$('#lima-toggle').click(function(event) {
  event.preventDefault();
  $('lima-gen1').toggleClass('toggled');
});
// Botón de México

// Botón de Perú
