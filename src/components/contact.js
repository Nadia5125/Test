import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Button } from 'react-mdl';
import App from '../App';
import './contact.css';






class Contact extends Component {
  render() {
    return(

      <div className="contact-body">
        <Grid className="logout-grid">
          <Cell col={6}>  
               
          <div className="card text-center" style={{left: '500px', top: '200px', width: '80%', height: '60px'}}>
            <h3 style={{position: 'relative', left: '2px', fontFamily: 'Italic', color: 'black', top: '15px'}}>You are Log Out</h3>
           
          </div>
          
          <div className="card" style={{top: '200px', height: '150px', left: '500px', width: '80%'}}>            
            <form>
              <div className="contact" style={{color:'black'}}>               
                <div className="form-group text-center" style={{color: 'black'}}>                    
                  <Button style={{position: 'relative', width: '400px', height: '40px', right: '90px', top: '30px', backgroundColor: 'rgba(89, 8, 109, 0.688)'}} type="submit" className="btn btn-primary">Logout</Button>
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


export default Contact;













// class Contact extends Component {
//   render() {
//     return(
//       <div className="contact-body">
//         <Grid className="contact-grid">
//           <Cell col={6}>
//             {/* <h3 style={{position: 'relative', left: '150px'}}>Nadia</h3>
//             <img
//               src="https://avatars2.githubusercontent.com/u/54503646?s=460&u=5e554e2cf5dd9bb934d884b2ebb4312665b1e62a&v=4"
//               alt="avatar"
//               style={{height: '250px', position: 'relative', left: '150px'}}
//                />

//              <p style={{width: '50%', margin: 'auto', paddingTop: '1em', fontSize: '15px'}}>I always have been fascinated by how technology is involved in our daily lives and makes our lives easier and more productive. It also connects people globally who were not connected in the past without all of the latest that tech has to offer. I have had a chance to learn some types of technology and this website will allow me to express what I have learned and continue to improve.
//              </p> */}

// {/* 
//           <form>
//             <label>
//               Name:
//               <input type="text" name="name" />
//             </label>
//             <input type="submit" value="Submit" />
//           </form> */}
          
//           <h3 style={{position: 'relative', left: '150px', fontFamily: 'Italic'}}>Logout</h3>
//           <hr style={{position: 'relative', right: '60px', width: '60%'}}/>
//           <form>
//             <div className="contact" style={{width: '100%', margin: 'auto', paddingTop: '1em', fontSize: '15px'}}> 
//               <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <br></br>
//                   <input style={{width: '300px', height: '30px'}} type="text" className="form-control" />
//               </div>
//               <div className="form-group">
//                   <label htmlFor="exampleInputEmail1">Email address</label>
//                   <br></br>
//                   <input style={{width: '300px', height: '30px'}} type="email" className="form-control" aria-describedby="emailHelp" />
//               </div>
//               <div className="form-group">
//                   <label htmlFor="message">Message</label>
//                   <br></br>
//                   <textarea  style={{width: '300px', height: '90px'}} className="form-control" rows="5"></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </form>          



//           </Cell>
//           <Cell col={6}>
//             <h2 style={{position: 'relative', left: '280px'}}>Contact Me</h2>
//             <hr style={{position: 'relative', left: '80px', width: '70%'}}/>

//             <div className="contact-list">
//               <List>
//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
//                     <i className="fa fa-phone-square" aria-hidden="true"/>
//                     (651) 315-0071
//                   </ListItemContent>
//                 </ListItem>

//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
//                     <i className="fa fa-fax" aria-hidden="true"/>
//                     (651) 315-0071
//                   </ListItemContent>
//                 </ListItem>

//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
//                     <i className="fa fa-envelope" aria-hidden="true"/>
//                     nsifferath@nmstrader.com
//                     <a href="mailto:nsifferath@nmstrader.com"  traget="_blank">
//                     </a>
//                   </ListItemContent>
//                 </ListItem>

//                 <ListItem>
//                   <ListItemContent style={{fontSize: '30px', fontFamily: 'Italic'}}>
//                     <i className="fa fa-skype" aria-hidden="true"/>
//                     MySkypeID
//                   </ListItemContent>
//                 </ListItem>

//               </List>
//             </div>
//           </Cell>
//         </Grid>
//       </div>
//     )
//   }
// }


// export default Contact;
