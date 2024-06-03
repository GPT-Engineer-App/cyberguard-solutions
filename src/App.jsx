import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import ExploreTraining from "./pages/ExploreTraining.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/explore-training" element={<ExploreTraining />} />
      </Routes>
    </Router>
  );
}

export default App;
