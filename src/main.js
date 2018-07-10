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
    let myNode = document.getElementById('data-results');
    while (myNode.lastChild) {
      myNode.removeChild(myNode.lastChild);
    }
    document.getElementsByTagName('h1')[0].innerHTML = 'Sede: Lima';
    document.getElementById('data-results').innerHTML = `<div class="card">
                <div class="info-general-lima"
                <p id="students-lima-general">${'45 Estudiantes'} ${students.length}</p>
                </div>
                       </div>`;
  });


  students.forEach(student => {
    document.getElementById('lima-fifth-generation').addEventListener('click', (event) => {
      let myNode = document.getElementById('data-results');
      while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }
      if (student.campus === 'lima' && student.generation === 'quinta') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Quinta Generación';
        document.getElementById('data-results').innerHTML += `<div class="card">
                      <div class="fifth-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });
  students.forEach(student => {
    document.getElementById('lima-fourth-generation').addEventListener('click', (event) => {
      let myNode = document.getElementById('data-results');
      while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }
      if (student.campus === 'lima' && student.generation === 'cuarta') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Cuarta Generación';
        myNode.innerHTML += `<div class="card">
                      <div class="fourth-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });

  students.forEach(student => {
    document.getElementById('lima-third-generation').addEventListener('click', (event) => {
      let myNode = document.getElementById('data-results');
      while (myNode.lastChild) {
        myNode.removeChild(myNode.lastChild);
      }
      if (student.campus === 'lima' && student.generation === 'tercera') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Tercera Generación';
        myNode.innerHTML += `<div class="card">
                      <div class="third-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });

  students.forEach(student => {
    document.getElementById('mexico-fifth-generation').addEventListener('click', (event) => {
      if (student.campus === 'mexico' && student.generation === 'quinta') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Tercera Generación';
        document.getElementById('data-results').innerHTML += `<div class="card">
                      <div class="third-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });
  students.forEach(student => {
    document.getElementById('mexico-fourth-generation').addEventListener('click', (event) => {
      if (student.campus === 'mexico' && student.generation === 'cuarta') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Tercera Generación';
        document.getElementById('data-results').innerHTML += `<div class="card">
                      <div class="third-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });
  students.forEach(student => {
    document.getElementById('mexico-third-generation').addEventListener('click', (event) => {
      if (student.campus === 'mexico' && student.generation === 'tercera') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Tercera Generación';
        document.getElementById('data-results').innerHTML += `<div class="card">
                      <div class="third-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });
  students.forEach(student => {
    document.getElementById('santiago-fifth-generation').addEventListener('click', (event) => {
      if (student.campus === 'santiago' && student.generation === 'quinta') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Tercera Generación';
        document.getElementById('data-results').innerHTML += `<div class="card">
                      <div class="third-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });
  students.forEach(student => {
    document.getElementById('santiago-fourth-generation').addEventListener('click', (event) => {
      if (student.campus === 'santiago' && student.generation === 'cuarta') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Tercera Generación';
        document.getElementById('data-results').innerHTML += `<div class="card">
                      <div class="third-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });
  students.forEach(student => {
    document.getElementById('santiago-third-generation').addEventListener('click', (event) => {
      if (student.campus === 'santiago' && student.generation === 'tercera') {
        document.getElementsByTagName('h1')[0].innerHTML = 'Status Lima Tercera Generación';
        document.getElementById('data-results').innerHTML += `<div class="card">
                      <div class="third-lima"
                      <p>${student.name}</p>
                      <p>${student.email}</p>
                      <p>${student.stats.completedPercentage}</p>
                      <p >${student.stats.status}</p>
                      </div>
                        </div>`;
      }
    });
  });
};
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
