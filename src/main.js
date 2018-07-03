//document.getElementById('contries').addEventListener('click', getContries);
const getData = () => {
fetch ('https://raw.githubusercontent.com/ninagallo/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json')
.then (res => res.json())
.then ((laboratoria) => {
  data.computeStudentsStats(laboratoria);
})
.catch(err => {
  console.log('Houston, we have a problem')
})
};
getData();

document.getElementById('compute-generation').addEventListener('click', data.computeGenerationsStats);
document.getElementById('student-stats').addEventListener('click', data.computeStudentsStats);
// document.getElementById('sort-students').addEventListener('click', sortStudents);
// document.getElementById('filter-students').addEventListener('click', filterStudents);
