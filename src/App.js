import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import headshot from './headshot.jpg'
class App extends Component {
  render() {
    return (
      <div>
      <Header />


        <main>
        <div className="About">
          <h1>About Me.</h1>
          <img style={{display:"block", marginLeft: "auto", marginRight: "auto", borderRadius: "50%"}}src={headshot} />
          <br />
          <p>My name is William Han.</p>
          <br />
          <p>I believe in doing the right thing. <mark><b>Always.</b></mark></p>
          <br />
          <p>I believe in helping people who are less priveleged than me. <mark><b>Because we should always consider and help those who aren&#39;t as lucky as us.</b></mark></p>
          <br />
          <p>And I believe in <mark><b>love</b></mark>: loving yourself and everyone around you.</p>
          <br />
          <hr />
          <p><b>UTCS &#39;19</b></p>
          <p>SWE Intern <i class="fab fa-amazon"></i> Summer &#39;18</p>
          <p>SWE Intern @Honeywell Summer &#39;17</p>
          <br />
          <p><b>Co-President</b> of Information Systems & Security Society (ISSS)</p>
          <p><b>Vice President</b> of Mobile App Development (MAD)</p>
          <p><b>Tech Organizer</b> of Freetail Hackers</p>
          <br />
          <hr />
         </div>
         <div className="Contact">
         <h1>My Links</h1>
         <p>
         <a style={{color: "black"}} href="https://github.com/copperstick6"><i class="fab fa-github fa-2x"></i></a>&nbsp;&nbsp;
         <a style={{color: "black"}} href="https://medium.com/@williamhan_8523"><i class="fab fa-medium fa-2x"></i></a>&nbsp;&nbsp;
         <a style={{color: "black"}} href="https://www.linkedin.com/in/william-han-a581b912a/"><i class="fab fa-linkedin fa-2x"></i></a>&nbsp;&nbsp;
         <a style={{color: "black"}} href="mailto:william.han.7244@gmail.com"><i class="fas fa-envelope fa-2x"></i></a>&nbsp;&nbsp;
         <a style={{color: "black"}} href="https://devpost.com/copperstick6"><i class="fas fa-code fa-2x"></i></a>&nbsp;&nbsp;
         <a style={{color: "black"}} href="https://drive.google.com/file/d/14DI1AHw7DQUoaafvGQNcr9-iZmWvG_xS/view?usp=sharing"><i class="far fa-file-alt fa-2x"></i></a>&nbsp;&nbsp;
         </p>
         <br />
         <h2><a style={{color: "black"}} href="https://drive.google.com/file/d/14DI1AHw7DQUoaafvGQNcr9-iZmWvG_xS/view?usp=sharing">Resume</a></h2>
         </div>
        </main>
        <footer>
        <center>
        <p style={{color: 'white'}}>We all make mistakes, and that&#39;s okay. What matters is how we learn from them and use that experience going forwared. <br />True friends always forgive and forget.</p>
        <p style={{fontSize:"15px"}}>&copy;2018 William Han <br /> Made with &hearts; by @copperstick6.</p>
        </center>

        </footer>
      </div>
    );
  }
}

export default App;
