import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section className="todoApp">
        <Header></Header>

        <Content></Content>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
