import React from 'react';
import './Home.css';


const Home = () => {

    return (

        // <nav className="homenav" >
        //     <h1>SEARCHCURY</h1>
        // </nav>,

        <div className="container text-center">
            <div className="body-holder">

                {/* <h1>WELCOME HOME PAGE hope it working</h1> */}
                <h1>Searchcury</h1>
                <br></br><br></br>
                
                <h6>You can search a movie that interest you by clicking the link below.</h6>
                <h6>If you don’t have an account, please go to the sign up section and create a new account.</h6>
                <h6>Then you can log into your new account.</h6>
                <br></br>

                <a
                className="App-link"
                href="./login">                
                <button className="btn" style={{width: '30%', height:'39px', color: 'white', backgroundColor: 'rgba(89, 8, 109, 0.688)', borderColor: 'rgba(89, 8, 109, 0.688)'}}>Search</button>
                </a>   
            </div>               

        </div>


    );
};

export default Home;





// <a
// className="App-link"
// href="./login"
//  target="_blank"
// rel="noopener noreferrer">
//  testing 
// <button href="./login" >Search</button>
// </a>
  