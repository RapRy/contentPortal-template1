import { useEffect } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { fetchCategories } from './actions/categories'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories("Games"))
  }, [dispatch])

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" >
          <Body />
        </Route>
        <Route path="/:cat">
          <Body />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
