  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age > 21);
console.log(oldEnough);

const paul = people.filter(person => person.name === 'Paul')
console.log(paul);

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

/*
This function is verbose and although works, it is overly complex
const candidates = students.filter(student => { // filters students array
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5) // filters and returns an array of students with > 5 years experience
  return strongSkills.length > 0;
})

console.log(candidates);
*/

// This puts the filter function from above into it own callback function which can be called and reused
const has5yearsExp = skill => skill.yrsExperience >= 5;//Extracts inner filter from above and passes it in the outer filter and can remove return statement too
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;  // filters students array // filters and returns an array of students with > 5 years experience
const candidates = students.filter(hasStrongSkills);
console.log(candidates);

const names = candidates.map(students => students.name);
console.log(names);