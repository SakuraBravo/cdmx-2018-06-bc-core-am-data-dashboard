// let blockData = [];
// const url = "https://raw.githubusercontent.com/SakuraBravo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json";
// const getJson = () => {
//   fetch (url)
//   .then (res => res.json())
//   .then ((data) => {
//   blockData.push(data);
//   console.log(blockData);
// })
//   .catch((error) => {
//     console.log('Huston we have a problem' );
//   })
// };
//
// getJson();
window.data = {
 computeStudentsStats : (laboratoria) => {
         let sedeNames = Object.getOwnPropertyNames(laboratoria);
         let sedes = Object.values(laboratoria);
         sedes.forEach(element) => {
           let generationNames = Object.getOwnPropertyNames(sedes);
           let generations = Object.values(sedes);
           console.log(generationNames);
           console.log(generations);
           document.getElementById('demo').innerHTML = generationNames;
         }

},
}
