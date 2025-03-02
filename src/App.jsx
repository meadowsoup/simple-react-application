function Header() {
  return (<h1 style={{backgroundColor: "black", color: "white", padding: "10px"}}>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{ color: props.color, fontSize: "18px", fontWeight: "bold"}}>{props.text}</p>);
}

function Footer() {
  return (<h1 style={{backgroundColor: "black", color: "white", padding: "10px"}}>Created by Me, ofc.</h1>);
}

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
