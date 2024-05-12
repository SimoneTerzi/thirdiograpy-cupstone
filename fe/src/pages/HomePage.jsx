import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";
import PhotoPortfolioCard from "../components/PhotoPortfolioCard/PhotoPortfolioCard";

const Homepage = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <PhotoPortfolioCard />
      {children}
      <MyFooter />
    </>
  );
};

export default Homepage;
