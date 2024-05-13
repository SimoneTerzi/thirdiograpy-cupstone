
import MyBiography from "../components/Content/Biography/MyBiography";

const Biography = ({ children }) => {
  return (
    <>
      
      <MyBiography />
      {children}
     
    </>
  );
};

export default Biography;
