import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
// import Body from './components/Body/Body'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFirstLoad } from './actions/categories'

function App() {
  const dispatch = useDispatch()
  // const { activeCat, activeSubcat, categories, contents } = useSelector(state => state.dataReducer)

  useEffect(() => {
    dispatch(fetchFirstLoad())
  }, [])

  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
