// import logo from './logo.svg';
// import { Timeline } from '@material-ui/lab';
import { Container, Grid } from '@material-ui/core';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';


function App() {
  return (
    // <div className="App">
      <Container className={'top_60'} >
        <Grid container spacing={7}>
        <Grid item lg={3} md={4} sm={12} xs={12} >
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
          <Header />
           <div className="main_content container_shadow">
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>
              <Route exact path='/'>
                <Resume />
              </Route>
            </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
        </Grid>
      </Container>
    // </div>
  );
}

export default App;
