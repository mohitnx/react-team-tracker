import femaleProfile from './images/femaleProfile.svg';
import maleProfile from './images/maleProfile.svg';
import DropDownList from './DropdownList';

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {

    return (
        <main className='container'>
            <div className='row justify-content mt-5 mb-8'>
                <center>
                <div className='col-7'>
                   <DropDownList selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                </div>
                </center>
                </div>
                <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8'>
                    <div className='card-collection'>
                    {
                    employees.map((employee) => (
                        //if team name same as drowpdown.show css with border...else show css wihtout border
                        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor:'pointer'}} onClick={handleEmployeeCardClick}>
                            {(employee.gender==='male')?<img src={maleProfile} className='card-img-top' />
                            : <img src={femaleProfile} className='card-img-top' />
                            }
                            <div  className='card-body'>
                                <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                                <p className='card-text'><b>Designation: </b> {employee.designation}</p>
                            </div>
                        </div>
                    ))
                    }
                    </div>
                  
                </div>

            
            
            </div>
        </main>
    )
}

export default Employees