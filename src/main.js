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
const url = "https://raw.githubusercontent.com/SakuraBravo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
const getData = (data) => {
    fetch (data)
    .then (res => res.json())
    .then ((laboratoria) => {
    //console.log(laboratoria);
    window.data.computeStudentsStats(laboratoria);
    //Entrar a la data de cada estudiante para imprimir los valores que queremos en cada una de las secciones
    students.map(student => {
      let result = ''
      let printResult = document.getElementById('btn-lima').addEventListener('click', (event) =>{
        document.getElementById('demo').innerHTML += `${student.name}<br>`
      })
    });
    console.log(students)
    drawContries(laboratoria);
    window.data.computeGenerationsStats(laboratoria);
    let printStudents = document.getElementById('demo')
    drawContries(laboratoria);


  })
    .catch((error) => {
      console.log('Houston we have a problem' );
    })
  };

getData(url);
