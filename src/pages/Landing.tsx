import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsuranceList from "../components/InsuranceList";

import "react-toastify/dist/ReactToastify.css";
import Home from "../components/Home";
import ChooseUs from "../components/ChooseUs";

const Landing: React.FC = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const user = JSON.parse(sessionStorage.getItem('user') || '{}');
  //   if (!user?.id) {
  //       toast.warn("Login to continue")
  //     navigate('/login'); 
  //   }
  // }, [navigate]); 

  return (
    <>
      <Navbar />
      <Home />
      <ChooseUs />
      <InsuranceList />
      <Footer />
    </>
  );
};

export default Landing;
