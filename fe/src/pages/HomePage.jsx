
import MyHomepage from "../components/Content/Homepage/MyHomepage";

const Homepage = ({ children }) => {
  return (
    <>
     
      <MyHomepage />
      {children}
      
    </>
  );
};

export default Homepage;
