import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './about.css';



class About extends Component {
  render() {
    return(
        
      <Grid className="about">
        <div style={{width: '50%', position: 'relative', left: '400px', top: '300px'}}>
          <div className="card-header" style={{backgroundColor: 'white', color: 'black'}}>
                <h3 style={{position:'relative', left: '5px', fontFamily: 'Italic'}}>Searchcury</h3>
          </div>
          <div className="card lg-12" style={{color: 'black', height: '150px'}}>
            <p style={{fontSize: 'medium', padding: '30px'}}>Searchury is a Search app for movies. The user will be able to search for any movies that they are interested in and in different types of genres.</p>
          </div>   
        </div>
      </Grid>
      

    )
  }
}

export default About;
