import React from "react";
import Header from "./components/Header";
import QuickJobSearch from "./components/QuickJobSearch";
import JobListings from "./components/JobListings";
import FooterNavigation from "./components/FooterNavigation";
import EmployersBanner from "./components/EmployersBanner";
import Text from "./components/Text";

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <EmployersBanner />
      <Text />
      <QuickJobSearch />
        <JobListings />
      <FooterNavigation />
    </div>
  );
};

export default App;