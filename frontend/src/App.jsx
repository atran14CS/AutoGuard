import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import StolenCarsPage from "./pages/StolenCarsPage";
import Report from "./pages/Report";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stolencar" element={<StolenCarsPage />} />
            <Route path="/reportStolenCar" element={<Report />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
