import kiloEats1 from '../assets/kilo-eats-1.jpg';
import kiloEats2 from '../assets/kilo-eats-2.jpg';
import kiloEats3 from '../assets/kilo-eats-3.jpg';
import skillBoost1 from '../assets/skill-boost-1.png';
import skillBoost2 from '../assets/skill-boost-2.png';
import skillBoost3 from '../assets/skill-boost-3.png';
import skillBoost4 from '../assets/skill-boost-4.png';
import arc1 from '../assets/arc-1.png';
import arc2 from '../assets/arc-2.png';
import arc3 from '../assets/arc-3.png';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-5">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-5">Portfolio</h2>

        {/* Top Row: Card 1 and Card 3 */}
        <div className="row justify-content-center g-4 mb-4">
          {/* Card 1 */}
          <div className="col-md-5">
            <div className="card glass-card glow-card h-100 short-card">
              <div className="p-3">
                <div className="row g-2">
                  <div className="col-6">
                    <img src={arc1} className="img-fluid rounded" alt="Project 1a" />
                  </div>
                  <div className="col-6">
                    <img src={arc2} className="img-fluid rounded" alt="Project 1b" />
                  </div>
                  <div className="col-12">
                    <img src={arc3} className="img-fluid rounded mt-2" alt="Project 1c" />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title h5 mb-3">Architecture Company</h3>
                <p>A showcase of architectural buildings made by a construction company.</p>
                {/*<a href="#" className="btn btn-primary">View Project</a>*/}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-5">
            <div className="card glass-card glow-card h-100 short-card">
              <div className="p-3">
                <div className="row g-2">
                  <div className="col-6">
                    <img src={kiloEats1} className="kilo1" alt="Project 3a" />
                  </div>
                  <div className="col-6">
                    <img src={kiloEats2} className="kilo1" alt="Project 3b" />
                  </div>
                  <div className="col-12">
                    <img src={kiloEats3} className="kilo3" alt="Project 3c" />
                  </div>
                </div>
              </div>
              <div className="kilo-body card-body">
                <h3 className="card-title h5 mb-3">KiloEats App</h3>
                <p>An interactive food delivery app with data visualizations, price displays, and real-time food options.</p>
                {/*<a href="#" className="btn btn-primary">View Project</a>*/}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Centered Card: Card 2 */}
        <div className="row justify-content-center g-4">
          <div className="col-md-8">
            <div className="card glass-card glow-card h-100 short-card">
              <div className="p-3">
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <img src={skillBoost4} className="ui rounded" alt="Project 2b" />
                  <img src={skillBoost2} className="ui rounded" alt="Project 2c" />
                  <img src={skillBoost3} className="ui rounded" alt="Project 2d" />
                </div>
              </div>
              <div className="card-body">
                <h3 className="card-title h5 mb-3">SkillBoost Mobile App (UI design)</h3>
                <p>A modern learning platform with dynamic content loading and a clean skill sharing experience.</p>
                {/*<a href="#" className="btn btn-primary">View Project</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
