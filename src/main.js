//document.getElementById('contries').addEventListener('click', getContries);
const url = 'https://raw.githubusercontent.com/ninagallo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json'
const getData = (data) => {
fetch (data)
.then (res => res.json())
.then ((laboratoria) => {
  data.computeStudentsStats(laboratoria);
})
.catch(err => {
  console.log('Houston, we have a problem')
})
};
getData(url);

document.getElementById('compute-generation').addEventListener('click', data.computeGenerationsStats);
document.getElementById('student-stats').addEventListener('click', data.computeStudentsStats);
// document.getElementById('sort-students').addEventListener('click', sortStudents);
// document.getElementById('filter-students').addEventListener('click', filterStudents);
