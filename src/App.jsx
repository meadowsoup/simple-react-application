import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content color="azure" text="First Application 💪🏽" />
      <Content color="whitesmoke" text="... 😈"/>
      <Content color="beige" text="lets go!"/>
      <Footer />
    </>
  );
}

export default App;
