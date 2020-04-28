import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './login.css';



class Login extends Component {
  render() {
    return(

      <div className="login-body">
        <Grid className="login-grid">
          <Cell>  
              
          <div className="card text-center" style={{left: '500px', top: '200px', width: '120%', height: '60px'}}>
            <h3 style={{position: 'relative', left: '2px', fontFamily: 'Italic', color: 'black', top: '15px'}}>Login</h3>
           
          </div>
          
          <div className="card" style={{top: '200px', height: '300px', left: '500px', width: '120%'}}>            
            <form>
              <div className="contact" style={{width: '100%', margin: 'auto', paddingTop: '1em', fontSize: '15px', color:'black'}}> 
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

export default Login;









// class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { activeTab: 0 };
//   }

//   toggleCategories() {

//     if(this.state.activeTab === 0){
//       return(
//         <div className="projects-grid">
//           {/* Project 1 */}
//           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
//             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://nadia5125.github.io/PortFolio/img/desk.jpg) center / cover'}} ></CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>GitHub</Button>
//               <Button colored>CodePen</Button>
//               <Button colored>Live Demo</Button>
//             </CardActions>
//             <CardMenu style={{color: '#fff'}}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>

//           {/* Project 2 */}
//           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
//             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://nadia5125.github.io/PortFolio/img/lad.jpg) center / cover'}} ></CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>GitHub</Button>
//               <Button colored>CodePen</Button>
//               <Button colored>Live Demo</Button>
//             </CardActions>
//             <CardMenu style={{color: '#fff'}}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>

//           {/* Project 3 */}
//           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
//             <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://nadia5125.github.io/PortFolio/img/headset.jpg) center / cover'}} ></CardTitle>
//             <CardText>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//             </CardText>
//             <CardActions border>
//               <Button colored>GitHub</Button>
//               <Button colored>CodePen</Button>
//               <Button colored>Live Demo</Button>
//             </CardActions>
//             <CardMenu style={{color: '#fff'}}>
//               <IconButton name="share" />
//             </CardMenu>
//           </Card>
//         </div>


//       )
//     } else if(this.state.activeTab === 1) {
//       return (
//         <div><h1>This is JavaScript</h1>
//         <p>Detail Coming Soon</p>
//         </div>
//       )
//     } else if(this.state.activeTab === 2) {
//       return (
//         <div><h1>This is Nodejs</h1>
//          <p>Detail Coming Soon</p>
//          </div>
//       )
//     } else if(this.state.activeTab === 3) {
//       return (
//         <div><h1>This is MongoDB</h1>
//         <p>Detail Coming Soon</p>
//         </div>
//       )
//     }

//   }



//   render() {
//     return(
//       <div>
//         <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
//           <Tab>React</Tab>
//           <Tab>JavaScript</Tab>
//           <Tab>Nodejs</Tab>
//           <Tab>MongoDB</Tab>
//         </Tabs>


//           <Grid>
//             <Cell col={12}>
//               <div className="content">{this.toggleCategories()}</div>
//             </Cell>
//           </Grid>


//       </div>
//     )
//   }
// }

// export default Projects;
