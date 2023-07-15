import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import './App.css';
import Navi from './Navi';
import Employees from './Employees';
import HomeForm from './HomeForm';
import GroupedTeamMembers from './GroupedTeamMembers';
import NotFound from './NotFound';
import Layout from './Layout';




function App() {

  //in the beginning we had a hardcoded value' useSatte('teamB') here
  //but we used local storage to store all our data there using useEffect
  //then since data is already there in local storage...we can
  //get data from local storage instead of hard coding it 
  //since we store in local storage as key value pair..and key was 'selectedTeam' 
  //we can access teh name of selected team as such using "short circult evalution"

  //if the first operand accepts (here local storage bata value ayo bhane) js short circuts and does't even look at second operand (here hard coded value)
  const [selectedTeam, setTeam] = useState('TeamB');
  const [employees, setEmployees] = useState([  
  {
      id: 1,
      fullName: "Sita Parajuli",
      designation: "Frontend",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Ram Pandey",
      designation: "Manager",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 3,
      fullName: "Gita Prakash",
      designation: "Backend",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Hari Paudyal",
      designation: "Cloud Engineer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "Saraswati Paudel",
      designation: "Backend",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 6,
      fullName: "Krishna Pant",
      designation: "Backend",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 7,
      fullName: "Anju Prajapati" ,
      designation: "UI/UX",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 8,
      fullName: "Shiva Pariyar",
      designation: "Frontend",
      gender: "male",
      teamName: "TeamD"
    },
]);
//useEffect hook is used to track state changes for specific variables
//when a state change occurs..code passed as a function to useEffect state can run 
//we are using useEffect to store teh values to local storage when state chagne occurs 
//to the array or the teamName

// //for employee Array
//     useEffect(() => {
//       //this part denoets the function to run when a certain event occurs(eg: state of varibale chagnges)

//     localStorage.setItem('employeeList', JSON.stringify(employees));
    
//     },
//     //this determines the event that must occur(eg: variable whose state changes..here employee ) to trigger the code/function above
//     //note: if we pass empty array here [] then teh code/function above runs only once when teh 
//     //component first loads
//      [employees]);

// //for teamName
//      useEffect(() => {
//       //this part denoets the code to run when a certain event occurs(eg: state of varibale chagnges)

//     localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
    
//     },
//     //this determines the event that must occur(eg: variable whose state changes ) to trigger the code/function above
//     //note: if we pass empty array here [] then teh code/function above runs only once when teh 
//     //component first loads
//      [selectedTeam]);



    function handleTeamSelectionChange(event) {
      //setTeam is a function....part of const[selectedTeam, setTEam]..whereselectedTeam is teh deafult value
      //setTeam is basically saying to set the value of selectedTeam varibale to event.target.value

      setTeam(event.target.value);
    }

/* 
Here's a breakdown of what happens in the handleEmployeeCardClick function:

  The function receives an event object representing the click event.
  It retrieves the id of the clicked <div> element using event.currentTarget.id.
  It converts the id to an integer using parseInt(event.currentTarget.id).
  It maps over the employees array using the map function to create a new array transformedEmployees.
  For each employee in the employees array, it checks if the id matches the clicked employee's id.
  If there's a match, it checks if the teamName of the employee is the same as the currently selected team. If it is, it sets the teamName to an empty string, indicating that the employee is no longer assigned to any team. If it's not the same, it sets the teamName to the currently selected team.
  If there's no match, it returns the employee object as it is.
  The updated employee objects are collected in the transformedEmployees array.
  The transformedEmployees array can then be used to update the state or perform any further operations.
*/



/* 
The ternary structure (a) ? (b) ? (c) : (d) : (e) is a nested conditional statement in JavaScript. It works as follows:

  The condition a is evaluated. If the condition a is truthy (evaluates to true), the inner ternary expression (b) ? (c) : (d) is evaluated. Otherwise, the outer ternary expression returns (e).

  If the condition b (the inner condition) is truthy, the expression (c) is executed. The result of (c) is the overall result of the inner ternary expression.

  If the condition b is falsy, the expression (d) is executed. The result of (d) is the overall result of the inner ternary expression.

  The result of the inner ternary expression becomes the result of the overall ternary expression if a is true.

  If a is false, the outer ternary expression returns (e) as the overall result.

The flow of the ternary structure can be summarized as follows:

  If a is true, evaluate b. If b is true, execute c and return the result. If b is false, execute d and return the result.
  If a is false, return e as the result.

This nested ternary structure allows for conditional branching based on multiple conditions in JavaScript.
*/



/* 
In the code you provided, {...employee, teamName:''} is an example of object spread syntax in JavaScript. It is used to create a new object by copying the properties of the existing employee object and overriding the teamName property with an empty string.

Here's a breakdown of its usage and purpose:

  ...employee: The spread syntax (...) is used to copy all the properties from the employee object into the new object. This ensures that all the existing properties of the employee object are retained in the new object.

  ,: The comma separates the copied properties from the new property that we want to override.

  teamName: '': This is the new property we are adding to the new object. It sets the teamName property to an empty string ('').

The purpose of {...employee, teamName:''} is to create a new object that is a copy of the employee object but with the teamName property set to an empty string. This is commonly used when you want to update or modify specific properties of an object without mutating the original object.

In the context of the code you provided, this syntax is used inside the map function to create a new array (transformedEmployees) where the teamName property of the matching employee is updated based on the condition.*/
    function handleEmployeeCardClick(event) {
      const transformedEmployees = employees.map((employee) =>( employee.id === parseInt(event.currentTarget.id))
      //if teamName of selected emplouee is the same as the teamName in the dropdown then
          //meaning the employee already has border..so click garyo bhane border hatnu paryo
      ? (employee.teamName === selectedTeam)
      ?{...employee, teamName:''}
          //hwoeer if the team name is not the same ..meaning employee has no border.. click garyo bhane tyo team ma halne(i.e border halne)
          //so teamnaem of theat selected employee becomes teh teamName at the dropdown

          //border dekhaune kam chai tala div ma cha...if kunai employee ko teamName matches the dropdown then those employees 
          //should have border around them
          
          //so styling is tala..styling is done based on teamName..that teamName is determined here
      :{...employee, teamName:selectedTeam}
      :employee  );


      //now setEmployess fucntion will change value of intial emplouye arrary which intially held all 12 employess without a border to hold empolyess with border based on their teams
      setEmployees(transformedEmployees);
    }

    ////////////////////////////////////
    ////////////////////////////////////
  return (
          <Router>
              <Navi />
            <Routes>
              
              <Route element={ <Layout selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee)=> employee.teamName === selectedTeam).length}/>}>
                 
                  <Route path='/TeamSelector' element={
                  <Employees employees={employees}
                  selectedTeam={selectedTeam} 
                  handleEmployeeCardClick = {handleEmployeeCardClick}
                  handleTeamSelectionChange = {handleTeamSelectionChange}
                  />}></Route>

                  <Route path='/GroupedTeamMembers' element= {<GroupedTeamMembers 
                                                        employees={employees}   
                                                        selectedTeam={selectedTeam} 
                                                          setTeam = {setTeam}/>}> </Route>
                  
                  <Route path = "*" element={<NotFound />}></Route>
                  </Route>
                
                <Route path='/' element={ <HomeForm employees={employees}/>}></Route>
            </Routes>
          </Router>
  );}

export default App;
