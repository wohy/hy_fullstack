import * as React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom'
import { App } from './app';
import { About } from './about';
import { MemberPage } from './memberpage'

export const AppRouter: React.FC = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route path="/" element={<App/>}/>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/members" element={<MemberPage/>} />
        </Routes>
      </div>
    </HashRouter>
  )
}