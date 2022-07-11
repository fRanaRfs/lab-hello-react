import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
          <div class="navdiv">
      <Navbar/>
      <h1 class="title">Say hello to ReactJS</h1> 
      <p class="text">You will learn how to use the most popular frontend library, and become a super Ninja Developer.</p>
      <button type="submit">Awesome!</button>
          </div>
              <div class="icons">
                  <div>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="icon1"></img>
                <h4>Declarative</h4>
                <p>React makes  it painless to create interactive UIs.</p>
                   </div>
                   <div>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="icon2"></img>
                <h4>Components</h4>
                <p>Built encapsulated components that manage their state.</p>
                  </div>
                  <div>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="icon3"></img>
                <h4>Single-Way</h4>
                <p>A set of immutable values are passed to the components.</p>
                </div>
                <div>
                <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="icon4"></img>
                <h4>JSX</h4>
                <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
              </div>
    </div>        
    
  );
}



export default App;

