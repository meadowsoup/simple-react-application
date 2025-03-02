function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{ color: props.color}}>{props.text}</p>);
}

function Footer() {
  return (<h1>Created by Me, ofc.</h1>);
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
