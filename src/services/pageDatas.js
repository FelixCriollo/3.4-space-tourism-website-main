import data from "./data"

// Returns a object with the crew data of the page
export function  crewData () {
  return data().then(data => data.crew)
} 
// Returns a object with the technologies data of the page
export function  technologyData () {
  return data().then(data => data.technology)
} 
// Returns a object with the destinations data of the page
export function  destinationsData () {
  return data().then(data => data.destinations)
} 

// const [crew, setCrew] = useState([]);

// useEffect(function () {
//   crewData()
//     .then(data => setCrew(data[0]));
// }, [])

// console.log(crew);


