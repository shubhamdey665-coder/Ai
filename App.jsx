import GoalGlobe from './components/GoalGlobe.jsx';

const features = [
  'AI Goal Planner',
  '4-Year Smart Tracker',
  'Weekly Progress Report',
  'Tests + Revision System',
];

const templates = [
  'Google SWE Preparation',
  'Fat Loss Tracker',
  'English Mastery Plan',
];

function App() {
  return (
    <main className="app">
      <nav className="navbar">
        <div className="logo">GoalNow AI</div>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#start">Start</a>
        </div>
      </nav>

      <section className="hero" id="start">
        <div className="heroText">
          <p className="badge">AI mentor + tracker + progress system</p>
          <h1>Achieve any goal with a personal AI roadmap.</h1>
          <p className="subtitle">
            GoalNow AI creates your plan, tracks daily progress, gives weekly tests,
            shows reports, and keeps you moving step by step.
          </p>

          <div className="heroButtons">
            <button className="primaryBtn">Start My Goal</button>
            <button className="secondaryBtn">View Templates</button>
          </div>
        </div>

        <GoalGlobe />
      </section>

      <section className="features" id="features">
        <h2>Everything your goal needs</h2>
        <div className="featureGrid">
          {features.map((item) => (
            <div className="card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="templates" id="templates">
        <h2>Ready templates</h2>
        <div className="templateGrid">
          {templates.map((item) => (
            <div className="templateCard" key={item}>
              <h3>{item}</h3>
              <p>Generate plan, tracker, test, report and revision automatically.</p>
              <button>Use Template</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
