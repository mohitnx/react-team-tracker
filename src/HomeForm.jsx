import {useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

const HomeForm = ({employees}) => {
    const navigate = useNavigate();
    var updatedEmployees = [];
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    //adding value to form varible (which is an object here)
    //using spread operator..it copies the form and adds .[filed] key and value to it
    const setField = (field, value) => {
        setForm({
            ...form,
            //key value pair from form
            [field]:value,
            //id is provided by default..user does't have to click
            id: Date.now()
        })

        //in js !! is a shorthand tech. to explicity convert a vlaue to a boolen
        //os errrors[field] is changed to a boolen..and if it is true the below code of setError 
        //executes 

        //here if the value is truthy (indicatinng presence of error) teh expression beccomes true
        //else if value is falsey (indicating no error) the expression becoems false..if false then 
        //code doesn't execute

        if (!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })

    }



    const validateForm = () => {
        const {fullName, designation, gender, teamName} = form
        const newErrors = {}
        if (!fullName || fullName==='') newErrors.fullName = "Please enter a name"
            else if (fullName.length < 3) newErrors.fullName = "Name has to be more than 2 letters"
        if (!designation || designation==='') newErrors.designation = "Please enter your role"
        if (!gender || gender==='Select Gender') newErrors.gender = "Please select your gender"
        if (!teamName || teamName==='Select Team') newErrors.teamName = "Please select a team"
        return newErrors
    }


 

    const handleSubmit = (e) => {

        //default behaviour of a form is to submit..we are blocking it here
        //to check for our validations
            e.preventDefault();
            const formErrors = validateForm()
        //if we have more than zeor keyvalue pair..in error obj then there is error
        if(Object.keys(formErrors).length>0)
            {
                setErrors(formErrors)
            }else {
          
         employees.push(form);
         
         navigate('/TeamSelector')
         alert(`Teams have been updated with your information ${form.fullName}`);
         console.log(updatedEmployees);       
            }
  
            
    }

    return (
    <>
            <Container>
            <h1 className="mb-5 mt-5">Member Registration</h1>
            <div className="form-container">
                <center>
                <Form className="mb-4 mt-4" >

                    <Form.Group controlId="fullName" className="mb-4">
                    <Form.Label className='h4 text-muted'>Your Name:</Form.Label>
                    <Form.Control 
                    value={form.fullName}
                    type="text" 
                    isInvalid={!!errors.fullName}
                    onChange={(e)=>setField('fullName', e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.fullName}
                    </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group controlId="designation" className="mb-4">
                    <Form.Label className='h4 text-muted'>Your designation:</Form.Label>
                    <Form.Control 
                    value={form.designation}
                    type="text" 
                    isInvalid={!!errors.fullName}
                    onChange={(e)=>setField('designation', e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                        {errors.designation}
                    </Form.Control.Feedback>
                    </Form.Group>

                    
                    <Form.Group controlId="gender" className="mb-4">
                    <Form.Label className='h4 text-muted'>Your Gender:</Form.Label>
                    <Form.Select placeholder='Select Gender'
                    value={form.gender}
                    isInvalid={!!errors.gender}
                    onChange={(e)=>setField('gender', e.target.value)}>
                            <option>Select Gender</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </Form.Select> 
                        <Form.Control.Feedback type='invalid'>
                        {errors.gender}
                    </Form.Control.Feedback>  
                    </Form.Group>
                    

                    <Form.Group controlId="teamName" className="mb-4">
                    <Form.Label className='h4 text-muted'>Your Team:</Form.Label>
                    <Form.Select placeholder='Select Team'
                    value={form.teamName}
                    isInvalid={!!errors.teamName}
                    onChange={(e)=>setField('teamName', e.target.value)}>
                            <option>Select Team</option>
                            <option value='TeamA'>Team A</option>
                            <option value='TeamB'>Team B</option>
                            <option value='TeamC'>Team C</option>
                            <option value='TeamD'>Team D</option>
                        </Form.Select> 
                        <Form.Control.Feedback type='invalid'>
                        {errors.teamName}
                    </Form.Control.Feedback>  
                    </Form.Group>

                    <Button className="mt-4 mb-4 btn-lg" onClick={handleSubmit}>Submit</Button>
                </Form>
                </center>
            </div>
            </Container>
    </>
      
);}

export default HomeForm