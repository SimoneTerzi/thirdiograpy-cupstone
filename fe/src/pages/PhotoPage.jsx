import MyFooter from "../components/Footer/MyFooter";
import MyNavbar from "../components/Navbar/MyNavbar";
import MyPhotoPage from "../components/Content/PhotoPage/MyPhotoPage";

const PhotoPage = ({ children }) => {
  return (
    <>
      <MyNavbar />
      <MyPhotoPage />
      <MyFooter />
    </>
  );
};

export default PhotoPage;
