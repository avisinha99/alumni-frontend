import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar.js';
import background from "./img/alumni.jpg";

function App() {
  return (
    <div className="App">
    <ResponsiveAppBar></ResponsiveAppBar>
    <div>
      <div className='text'>At NIIT University (NU), our endeavour is to create a vibrant intellectual environment that nurtures the free thinker, the pro-active problem solver, the “I’ll do it on my own!” entrepreneur. Their journeys begin at our gates, and we are proud of their successes.
We are only as strong as the bonds that nurture us, support us when we are weak, and cheer us on when we flag. Which is why a dedicated team of volunteers works to create lifelong linkages between alumni and the university.

Our excellent alumni network refreshes these bonds, brings alumni together, supports them in their endeavours and connects them to opportunities for professional development and networking.

So, whether you are seeking to expand your skill sets or changing career lanes, whether you want to celebrate your success or share how your failures made you stronger, whether you want an opportunity to connect with your faculty mentor or just relive your campus memories, we are here for you. Remember, the bonds forged on campus are strong and long-lasting.

Welcome back home!</div>
    </div>
    </div>

  );
}

export default App;
