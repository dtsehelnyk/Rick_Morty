import React from 'react';
import './Main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Characters } from '../Characters/Characters';
import { Episodes } from '../Episodes/Episodes';
import { Locations } from '../Locations/Locations';
import { WatchList } from '../WatchList/WatchList';

export const Main = () => {

  return (
    <main className="Main">
      <Route path="/characters">
        <Characters />
      </Route>
      
      <Route path="/episodes">
        <Episodes />
      </Route>

      <Route path="/locations">
        <Locations />
      </Route>

      <Route path="/my_list">
        <WatchList />
      </Route>
    </main>
  )
}