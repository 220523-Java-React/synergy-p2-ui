import {Route, Routes, Navigate} from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import HomePage from "./pages/HomePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useState } from "react";
import CreateRequestsPage from "./pages/requests/CreateRequestsPage";
import OpenRequestsPage from "./pages/requests/OpenRequestsPage";
import ApprovedUserRequestsPage from "./pages/requests/ApprovedUserRequestsPage";
import OpenUserRequestsPage from "./pages/requests/OpenUserRequestsPage";
import ApproveDenyRequestsPage from "./pages/requests/ApproveDenyRequestsPage";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});


function App() {

  const [appUser, updateAppUser] = useState();
  const [error, updateError] = useState(null);

  return (
    <ThemeProvider theme={darkTheme}>
    <Navbar user={appUser} />
    {/*
    {error && 
      <Error 
          error={error} 
          open={!!error} 
          updateOpen={() => updateError(null)} />}
    */}

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/refills/quickrefill" element={<CreateRequestsPage />} />
      <Route path="/refills/youropenrefills" element={<OpenRequestsPage />} />
      <Route path="/refills/yourapprovedrefills" element={<OpenUserRequestsPage />} />
      <Route path="/refills/allopenrefills" element={<ApprovedUserRequestsPage />} />
      <Route path="/refills/admin" element={<ApproveDenyRequestsPage />} />
      {/*
      {appUser && 
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/requests" element={<RequestsPage />} />
        </>
      }
    */}
      {/*
      <Route path="/login" element={
        <LoginPage 
          updateError={updateError} 
          updateAppUser={updateAppUser} />
      } />
      */}
    </Routes>
  </ThemeProvider>
  );
}

export default App;
