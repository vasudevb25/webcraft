// App.jsx
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1>PIXEL PHANTOM</h1>
        <p>Level up your digital gaming experience.</p>
      </div>
      
      <div className="containall">
        <div class="card">
          <div class="card-content">
            <p class="card-title">WHO ARE WE?</p>
            <p class="card-para">
              Whether you're a gamer or a developer, our mission is to redefine the gaming
              landscape and bring your visions to life.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="stats-container">
            <div className="stat">
              <h3>Games Released</h3>
              <p>150+</p>
            </div>
            <div className="stat">
              <h3>Players Worldwide</h3>
              <p>2M+</p>
            </div>
            <div className="stat">       
              <h3>Active Servers</h3>
              <p>500+</p>
            </div>
          </div>
          <div className="cta-container">
            <button className="cta-button">Start Gaming</button>
            <button className="cta-button secondary">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
