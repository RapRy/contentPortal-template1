import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCategories } from './actions/categories'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories("Games"))
  }, [])

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
