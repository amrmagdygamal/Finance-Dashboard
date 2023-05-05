import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { themeSettings } from "./themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBAr from "./scences/navbar";
import Dashboard from "./scences/dashboard";
import Predictions from "./scences/predictions"


const  App = () => {

  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <BrowserRouter>
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Box width="100%" height="120%" p="1rem 2rem 6rem 2rem">
          <NavBAr />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/predictions" element={<Predictions />} />
          </Routes>
        </Box>
    </ThemeProvider>
    </>
    </BrowserRouter>
  )
}

export default App;
