import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header 
        title="This is Pokemon Game!" 
        descr="Play my game now!" 
        />
      <Layout
        title="This is first block"
        desc="There will be your first Pokemon"
        urlBg
      />
      <Layout
        title="This is second block"
        desc="There will be your second Pokemon"
        colorBg="#fff000"
      />
      <Layout
        title="This is third block"
        desc="There will be your third Pokemon"
        urlBg
      />
      <Footer />
    </>
  );
}

export default App;
