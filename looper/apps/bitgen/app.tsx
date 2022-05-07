import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function BitgenApp() {
  return (
    <BrowserRouter>
      {/* header component */}
      <Routes>
        <Route path="/" element={<div>Hello World!!</div>}>
          {/* home page component */}
        </Route>
        <Route path="/about">{/* about page component */}</Route>
      </Routes>
      {/* footer component */}
    </BrowserRouter>
  );
}
