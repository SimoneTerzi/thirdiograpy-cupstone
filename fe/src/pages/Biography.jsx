import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";
import MyBiography from "../components/Content/Biography/MyBiography";

const Biography = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <MyBiography />
      {children}
      <MyFooter />
    </>
  );
};

export default Biography;
