import React, { Fragment } from 'react';
import RouterOfRoute from './Router';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JavaScript from './JavaScriptComponent/Quiz';
import Python from './PythonComponent/Quiz';
import Java from './JavaComponent/Quiz';
import Php from './PhpComponent/Quiz';
import Sql from './SqlComponent/Quiz';
import Header from './Header/Header';

function App() {
  return (
    <Fragment>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<RouterOfRoute />} />
        <Route path='/JavaScriptComponent/Quiz' element={<JavaScript />} />
        <Route path='/PythonComponent/Quiz' element={<Python />} />
        <Route path='/JavaComponent/Quiz' element={<Java />} />
        <Route path='/PhpComponent/Quiz' element={<Php />} />
        <Route path='/SqlComponent/Quiz' element={<Sql />} />
      </Routes>
    </BrowserRouter>
    </Fragment>
  )
}

export default App;