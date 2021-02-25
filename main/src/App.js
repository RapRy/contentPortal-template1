import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body'
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [curCat, setCurCat] = useState("Games-apk")

  useEffect(() => {
    const dataForm = new FormData;
    dataForm.append('cat', curCat)

    axios({
      method:'post',
      url:'http://localhost/_ry/contentportal-template1/main/php/query.php',
      headers: {'content-type':'application/x-www-form-urlencoded'},
      data:dataForm
    })
    .then(res => setData(res.data))
  }, [curCat])

  return (
    <>
      <Header setCurCat={setCurCat} />
      <Body data={data} />
    </>
  );
}

export default App;
