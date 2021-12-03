import React, { useState } from 'react';
import ModalCard from './ModalCard';


function ProfileInput(){
    const form = {
        fullname:"",
        dateOfBirth: "",
        company: "",
        phonenum: "",
        role: "",
        profilepic: "",
    };

    const [file, setFile]= useState('');

    const [{ fullname, dateOfBirth, company, phonenum, role, profilepic}, setForm] = useState(form);

 

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    };



    

    return(
        <div className="container d-flex justify-content-center mt-5">
            <div className='card' id="form-input-card">
            <div className="card-body">
                    <h3 className="card-title">Form Biodata</h3>


                    <div className="form-group">
                        <label for="fullname">Fullname</label>
                        <input type="text" className="form-control" name='fullname' id="fullname" placeholder="Enter fullname" value={fullname} onChange={handleChange}/>
                    </div>

          
                    <div className="form-group">
                        <label for="dateOfBirth">Date of birth</label>
                        <input type="date" className="form-control" name='dateOfBirth' id="birthdate" value={dateOfBirth} onChange={handleChange}/>
                    </div>

                    
                
                    <div className='form-group'>
                      <label for="company">Company</label>
                      <input type="text" className="form-control" name='company' id="company" placeholder="Enter company name" value={company} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label for="phonenum">Mobile Number</label>
                        <input type="text" className="form-control" name='phonenum' id="phonenum" placeholder="Enter mobile number" value={phonenum} onChange={handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Job</label>
                        <select className="form-select" name='role' id='role' value={role}  onChange={handleChange} >
                            <option id='fullstack' value="Fullstack Developer">Fullstack Developer</option>
                            <option id='data' value="Data Scientist">Data Scientist</option>
                            <option id='frontend' value="Frontend Developer">Frontend Developer</option>
                            <option id='backend' value="Backend Developer">Backend Developer</option>
                        </select>
                        
                    </div>

                    <div className='form-group'>
                        <label>Upload Profile Picture</label>
                        <input
                            type='file'
                            className='form-control'
                            onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                        />
                    </div>
                    


                   

                <ModalCard
                    fullname={fullname}
                    dateOfBirth={dateOfBirth}
                    company={company}
                    phonenum={phonenum}
                    role={role}
                    profilepic={profilepic}
                    file={file}
                 
                />

                </div>
            
            </div>
            
           
        </div>
    )

}

export default ProfileInput;