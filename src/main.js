let correo = document.getElementById('email');
let llave = document.getElementById('password');
document.getElementById('enter').addEventListener('clik', userLaboratoria);

const userLaboratoria = () => {
   let mail = correo.value;
   let password = llave.value;
    if(mail == 'prueba@laboratoria.la' && password == '20181'){
      return true;
    } else{
      alert ('!Usuario No encontrado!')
    }
//   console.log(mail);
//   console.log(password);
// }


//let dataBlock = Object.assign({}, json);
const getData = () => {
  const url = "https://raw.githubusercontent.com/SakuraBravo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
    fetch (url)
    .then (res => res.json())
    .then ((laboratoria) => {
    data.computeStudentsStats(laboratoria);
  })
    .catch((error) => {
      console.log('Huston we have a problem' );
    })
  };
getData();
