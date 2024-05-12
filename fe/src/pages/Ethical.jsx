import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";
import MyEthicalPage from "../components/Content/EthicalPage/MyEthicalPage";

const Ethical = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <MyEthicalPage />
      <MyFooter />
    </>
  );
};

export default Ethical;
