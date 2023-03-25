import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  //   clg_id="3d708c4f0eb94732ad13ff3f0f986a58"
  // personal_id="25e77ecdcf084a499388777ec111c2fa"
  const pageSize = 9;
  const apiKey = process.env.NEWS_API;
  const country = 'in';
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <News pageSize={pageSize} apiKey={apiKey} category="general" key="general" country={country} />
          </Route>
          <Route exact path='/Business'>
            <News pageSize={pageSize} apiKey={apiKey} category="business" key="business" country={country} />
          </Route>
          <Route exact path='/Entertainment'>
            <News pageSize={pageSize} apiKey={apiKey} category="Entertai" key="Entertainment" country={country} />
          </Route>
          <Route exact path='/General'>
            <News pageSize={pageSize} apiKey={apiKey} category="General" key="General" country={country} />
          </Route>
          <Route exact path='/Health'>
            <News pageSize={pageSize} apiKey={apiKey} category="Health" key="Health" country={country} />
          </Route>
          <Route exact path='/Science'>
            <News pageSize={pageSize} apiKey={apiKey} category="Science" key="Science" country={country} />
          </Route>
          <Route exact path='/Sports'>
            <News pageSize={pageSize} apiKey={apiKey} category="Sports" key="Sports" country={country} />
          </Route>
          <Route exact path='/Technology'>
            <News pageSize={pageSize} apiKey={apiKey} category="Technology" key="Technology" country={country} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
