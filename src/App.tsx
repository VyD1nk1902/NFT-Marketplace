import "@styles/index.css";

//Global Components
import Header from "@components/Header";
import Footer from "@components/Footer";
import ModalHeader from "@components/ModalHeader";

//Pages
import Homepage from "@pages/Homepage";
import CreateAccount from "@pages/CreateAccount";

function App() {
  return (
    <div>
      <Header />
      <ModalHeader />
      <Homepage />
      <CreateAccount />
      <Footer />
    </div>
  );
}

export default App;
