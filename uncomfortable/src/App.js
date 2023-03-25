import './App.css';
import EpisodeCard from './components/EpisodeCard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <EpisodeCard 
          title={"Episode 109"}
          description={"Join Steve, Kyle and myself as we head in a direction none of us expected. The tone was set early and what took place over the next 2 1/2 hours can best be described as peek behind the curtain for those of us that do what we do. These two were gracious enough to not hold back on the personal experiences that put them on this path and open up about what its like gatekeeping peoples experiences. I feel a kinship with these guys and am thankful our paths have crossed, they're truly brothers in arms. Make sure to head over and give these guys a lot of love for what they're putting out!"}>
          </EpisodeCard>
      </body>
    </div>
  );
}

export default App;
