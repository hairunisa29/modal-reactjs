import React from 'react';
import './ProfileCard.css'



function ModalCard(props){
    const [data, setData] = React.useState([])
    

    const saveHandle = async(fullname, dateOfBirth, company, phonenum, role, profilepic, file) => {
      
     setData(prevState=>
                [...prevState,
                { "id": data.length + 1, "fullname": fullname, "dateOfBirth": dateOfBirth, "company": company, "phonenum":phonenum, "role":role, "profilepic":profilepic, 'file':file }
                ])
     
    
    }

    console.log(data)
    
    return (
        <>
            <button
                className="btn"
                id="submit"
                style={{ background: "#1b1a7a", border: "none", width: '100px', color: "#ffff", marginLeft: '200px', marginTop:"10px"}}
                onClick={() => { saveHandle(props.fullname, props.dateOfBirth, props.company, props.phonenum, props.role, props.file, props.profilepic) }}
                data-bs-toggle="modal" 
                data-bs-target="#previewCard"
                type='button'
            >
                Submit
            </button>

            <div className="modal fade" id="previewCard" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                <div className = "card">
                       
                       <div className='prevGroup'>
                       <div className="top-container"> <img src={props.file} className="profile-img" alt='foto'/>
                        <div className="ml-3">
                          <h5 className="name">{props.fullname}</h5>
                          <p className="mail">{props.dateOfBirth}</p>
                        </div>
                      </div>
                         
                         
                         <div className="name-container">
                             
                             <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                                 <div className="icon">
                                     <div className="round-div"><i className="fa fa-building"></i></div>
                                 </div>
                                 <div className="d-flex flex-column"> 
                                     <span className="company">{props.company}</span> 
                                     <span className="role">{props.role}</span> 
                                 </div>
                             </div>
                             <div className="phonenum">
                              <i className="nav-icon fa fa-phone-square"></i>
                              <span className="phonenumdetail">{props.phonenum}</span>
                            </div>
                         </div>
                  
                       </div>
                    
                       <button 
                          type="button" 
                          className="btn btn-secondary" 
                          data-bs-dismiss="modal"
                          style={{ background: "#1b1a7a", border: "none", width: '100px', color: "#ffff", alignItems:'center', marginLeft:"75px"}}
                        >
                          Close
                       </button>
                    
                </div>
                  
                </div>
              </div>
            
            

        </>
    )
}

export default ModalCard;