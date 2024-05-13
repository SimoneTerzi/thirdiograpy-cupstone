import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";
import MyHomepage from "../components/Content/Homepage/MyHomepage";

const Homepage = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <MyHomepage />
      {children}
      <MyFooter />
    </>
  );
};

export default Homepage;