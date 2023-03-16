import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import MContent from '../Component/MContent'

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<MContent />} />         
         </Routes>
      </BrowserRouter>

    </>
  )
}

export default AppRouter