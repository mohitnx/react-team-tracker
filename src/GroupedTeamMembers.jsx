import { useState } from "react";

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

    function groupTeamMembers() {
        var teams = [];

        var teamMembersA = employees.filter((employee) => employee.teamName === 'TeamA');
        var teamA = {team:'TeamA', members:teamMembersA, collapsed: selectedTeam === 'TeamA'? false: true}
        teams.push(teamA);
        
        var teamMembersB = employees.filter((employee) => employee.teamName === 'TeamB');
        var teamB = {team:'TeamB', members:teamMembersB, collapsed: selectedTeam === 'TeamB'? false: true}
        teams.push(teamB);

        var teamMembersC = employees.filter((employee) => employee.teamName === 'TeamC');
        var teamC = {team:'TeamC', members:teamMembersC, collapsed: selectedTeam === 'TeamC'? false: true}
        teams.push(teamC);

        var teamMembersD = employees.filter((employee) => employee.teamName === 'TeamD');
        var teamD = {team:'TeamD', members:teamMembersD, collapsed: selectedTeam === 'TeamD'? false: true}
        teams.push(teamD);

        return teams;

    }

    //eta ko setTeam le uta arko screen ma ni affcet garne bho..so eta last ma team C selcet gaera uta ko 
    //screen ma gayo bhane uta ko dropdonw ma ni team C selected hunca...and vice versa...so 
    //this shows hamle app.js bata same array, function pass garya..differnt screen ma..so jun screen 
    //ma changes bhaye ni tyo values haru ma..sab screen ma dekhincha tyo changes

    function handleTeamClick(event){
        var transformedGroupData = groupedEmployees.map((groupedData)=> groupedData.team === event.currentTarget.id
                                                        ?{...groupedData, collapsed:!groupedData.collapsed}
                                                        :groupedData
                                                        );

        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
                                                        
    }
    return (
        <main className="container">
           {
                groupedEmployees.map((item)=>{
                    return (
                        <div key={item.team} className='card mt-2' style={{cursor:'pointer'}}>
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                                Team Name:{item.team}
                            </h4>
                            <div id={'collapse_' + item.team}
                            //since we are using bootstrap...eta bata directly collaspse ra uncoplase garne css 
                            //lina milyo...show garyo bhane uncollapsse css use hune bho..collape gary obhane collapse css
                            //use hune bho..and handle clikc function le..based on the click..collapse property of each item
                            //toggle garne bho and based on that ya pani kun css line change hune bho
                            className={`collapse ${item.collapsed ? '' : 'show'}`}>
                                <hr/>
                                {
                                    item.members.map(member =>{
                                        return (
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dart">Full Name: {member.fullName}</span>
                                                </h5>
                                                    <p>Designation: {member.designation}</p>
                                                </div>
                                        );
                                    })
                                }

                            </div>

                        </div>

                    );
                })
           }
        </main>
    );
}

export default GroupedTeamMembers