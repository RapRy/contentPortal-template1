import { useEffect } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import { useDispatch } from 'react-redux'

import { fetchCategories } from './actions/categories'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories("Games"))
  }, [dispatch])

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
