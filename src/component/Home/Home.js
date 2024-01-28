import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Main from "./Main";
import Products from "./Products";

const Home = () => {
  return (
    <div className="bg-white">
      <Header />
      <Main />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
