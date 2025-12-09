import React from "react";
import Appbar from "./components/Appbar";
import Filters from "./components/Filters";
import Items from "./components/Items";
import Seasonspl from "./components/Seasonspl";
import Footer from "./components/Footer";


function App(){
  return(
    <div>
      <Appbar />
      <Filters />
      <Items />
      <Seasonspl />
      <Footer />
     
    </div>
  )
}
export default App;