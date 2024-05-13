import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";
import MyPortfolio from "../components/Content/Portfolio/MyPortfolio";

const Portfolio = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <MyPortfolio />
      {children}
      <MyFooter />
    </>
  );
};

export default Portfolio;
