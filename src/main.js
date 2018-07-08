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
    window.data.computeGenerationsStats(laboratoria);


  })
    .catch((error) => {
      console.log('Houston we have a problem' );
    })
  };
getData(url);
