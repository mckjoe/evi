import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Men from './Men';
import Women from './women';
import About from './About';
import VisitUs from './VisitUs';
import Factories from './Factories';
import Footer from './Footer';

function App(){

  return (
    <div>
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-weight: lighter;
        }
      `}</style>
      <Navbar />

      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/women' component={Women} />
        <Route path='/men' component={Men} />
        <Route path='/visit-us' component={VisitUs} />
        <Route path='/about' component={About} />
        <Route path='/factories' component={Factories} />
        <Route component={Error404} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
