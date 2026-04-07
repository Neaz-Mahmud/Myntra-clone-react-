import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";
import Homeitem from "../component/Homeitem";

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

    </>
  );
}

export default App;
