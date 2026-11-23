import React from "react";
import Header from "../components/Layout/Header";
import Events from "../components/Route/Hero/Events/Events";
import Footer from "../components/Route/Hero/Footer/Footer";

const EventsPage = () => {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: "20px", fontSize: "28px", fontWeight: "bold" }}>All Events</h1>
      <Events />
      <Footer />
    </div>
  );
};
export default EventsPage;