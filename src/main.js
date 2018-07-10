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
      // const students = data.computeStudentsStats(laboratoria);
      window.sortStudents(students);
    })
    .catch((error) => {
      console.log('Houston we have a problem');
    });
};
getData(url);

// const info = (laboratoria) =>{
//   let processedData = window.data.computeStudentsStats(laboratoria);
//   // console.log(processedData);
// };

// const processedData = data.computeStudentsStats(laboratoria)

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

