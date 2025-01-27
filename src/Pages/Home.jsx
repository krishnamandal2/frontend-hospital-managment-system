import  { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Inderprastha Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/doct.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
