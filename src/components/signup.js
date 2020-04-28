import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import FirstJob from './skills';
import './signup.css'


//this test for signup form
class Signup extends Component {
  render() {
    return(
      <div className="card-signup" >
        <Grid className="signup-grid">
          <Cell col={4}>   

               
          <div className="card text-center" style={{left: '500px', top: '200px', width: '120%', height: '60px'}}>
            <h3 style={{position: 'relative', left: '2px', fontFamily: 'Italic', color: 'black', top: '15px'}}>Sign Up</h3>           
          </div>
          
          <div className="card" style={{top: '200px', height: '350px', left: '500px', width: '120%'}}>            
            <form>
              <div className="contact" style={{width: '100%', margin: 'auto', paddingTop: '1em', fontSize: '15px', color:'black'}}> 
                <div className="form-group">
                    <label htmlFor="name">User Name</label>
                    <br></br>
                    <input style={{width: '400px', height: '30px'}} type="text" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <br></br>
                    <input style={{width: '400px', height: '30px'}} type="text" className="form-control" />
                </div>

                <div className="form-group" style={{color: 'black'}}>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <br></br>
                    <input style={{width: '400px', height: '30px'}} type="email" className="form-control" aria-describedby="emailHelp" />
                    <br></br>
                     <Button style={{width: '400px', height: '40px', backgroundColor: 'rgba(89, 8, 109, 0.688)'}} type="submit" className="btn btn-primary">Submit</Button>
                </div>                
               
              </div>
            </form>          
          </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Signup;





















// class Resume extends Component {
//   render() {
//     return(
//       <div>
//         <Grid>
//           <Cell col={4}>
//             <div style={{textAlign: 'left'}}>
//               <img
//                 src="https://avatars2.githubusercontent.com/u/54503646?s=460&u=5e554e2cf5dd9bb934d884b2ebb4312665b1e62a&v=4"
//                 alt="avatar"
//                 style={{height: '200px'}}
//                  />
//             </div>

//             <h2 style={{paddingTop: '1em', fontFamily: 'Italic'}}>Nadia</h2>
//             <h4 style={{color: 'grey'}}>Programmer</h4>
//             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
//             <p>I always have been fascinated by how technology is involved in our daily lives and makes our lives easier and more productive. It also connects people globally who were not connected in the past without all of the latest that tech has to offer. And I am currently learning Full Stack Bootcamp at Gorge Washington University.
//             </p>
//             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
//             <h5>Address</h5>
//             <p>1 Hacker VA Park, 94025</p>
//             <h5>Phone</h5>
//             <p>(651) 315-0071</p>
//             <h5>Email</h5>
//             <p>nsifferath@nmstrader.com</p>          
           
            
          
//             <h5>Web</h5>            
//             <a style={{color: 'blue', display: 'hiden'}} href="https://nadia5125.github.io/PortFolio/index.html" rel="noopener noreferrer" target="_blank">mywebsite<p></p>
//             </a>
            
//             <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
//           </Cell>
//           <Cell className="resume-right-col" col={8}>
//             <h2 style={{fontFamily: 'Italic'}}>Education</h2>


//             <Education
//               // startYear={2002}
//               // endYear={2006}
              
//               schoolName="Temple University Japan"
//               schoolDescription="International Business/Trade/Commerce/Public Relations/Image Management"
//                />

//                {/* <Education
//                  startYear={2007}
//                  endYear={2009}
//                  schoolName="My 2nd University"
//                  schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
//                   /> */}
//                 <hr style={{borderTop: '3px solid #e22947'}} />

//               <h2 style={{fontFamily: 'Italic'}}>Experience</h2>

//             <Experience
          
//               // jobTitle={2009}
//               // endYear={2011}

//               jobTitle="First Job"
//               jobName="Marketing And Public Relations Specialist"
//               jobDescription="Manage activity for women group that included fund raising for education opportunities for children in third world countries."
//               />

//               <Experience
//                 // startYear={2011}
//                 // endYear={2015}

//                 jobTitle="Second Job"
//                 jobName="Project Manager"
//                 jobDescription="Managed plans and activities for fund raising for medical, shelter, food and clothing for refugees"
//                 />
//               <hr style={{borderTop: '3px solid #e22947'}} />
//               <h2 style={{fontFamily: 'Italic'}}>Skills</h2>
//               <Skills
//                 skill="HTML/CSS"
//                 progress={90}
//                 />
//                 <Skills
//                   skill="React"
//                   progress={70}
//                   />
//                   <Skills
//                     skill="javascript"
//                     progress={50}
//                     />                
//                     <Skills
//                       skill="NodeJS"
//                       progress={50}
//                       />            


//           </Cell>
//         </Grid>
//       </div>
//     )
//   }
// }

// export default Resume;
