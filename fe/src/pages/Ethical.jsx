import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";
import MyEthicalPage from "../components/Content/EthicalPage/MyEthicalPage";

const Ethical = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <MyEthicalPage />
      {children}
      <MyFooter />
    </>
  );
};

export default Ethical;
