import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import styles from './App.module.scss';
import { Routes } from './constants';
import { Header } from './components';
import { Home } from './pages';
import { Gallery } from './pages';
import { GlobalActions } from './components/GlobalActions';

function App() {
  return (
    <Router>
      <div className={styles.mainWrapper}>
        <header>
          asd
          <Header />
        </header>
        <section className={styles.sectionWrapper}>
          <Switch>
            <Route exact path={Routes.home.path} component={Home} />
            <Route exact path={Routes.gallery.path} component={Gallery} />
            <Route path="*">
              <Redirect to={Routes.home.path} />
            </Route>
          </Switch>
          <GlobalActions />
        </section>
      </div>
    </Router>
  );
}

export default App;
