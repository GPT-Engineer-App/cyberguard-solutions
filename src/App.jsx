import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import LearnMore from "./pages/LearnMore";
import ExploreTraining from "./pages/ExploreTraining";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/explore-training" element={<ExploreTraining />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
