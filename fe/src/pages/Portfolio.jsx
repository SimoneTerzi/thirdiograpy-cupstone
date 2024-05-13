
import MyPortfolio from "../components/Content/Portfolio/MyPortfolio";

const Portfolio = ({ children }) => {
  return (
    <>
     
      <MyPortfolio />
      {children}
     
    </>
  );
};

export default Portfolio;
