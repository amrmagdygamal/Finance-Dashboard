import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBAr from "./scences/navbar";
import Dashboard from "./scences/dashboard";


const  App = () => {

  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <BrowserRouter>
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <NavBAr />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<div>predictions page</div>} />
          </Routes>
        </Box>
    </ThemeProvider>
    </>
    </BrowserRouter>
  )
}

export default App;
