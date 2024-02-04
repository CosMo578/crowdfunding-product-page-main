import Image from "/images/image-hero-desktop.jpg";
import { Header } from "./components/Header";
import { FirstSection } from "./components/FirstSection";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";
// import { SuccessModal } from './components/SuccessModal';
import { SelectionModal } from "./components/SelectionModal";
import "./App.css";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bambooStand, setBambooStand] = useState(101);
  const [blackEdition, setBlackEdition] = useState(64);
  const pricing = [
    {
      h3: "Bamboo Stand",
      pledge: "Pledge $25 or more",
      p: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special
       Backer member list.`,
      qty: `${bambooStand}`,
      btn: "Select Reward",
    },
    {
      h3: "Black Edition Stand",
      pledge: "Pledge $75 or more",
      p: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
      qty: `${blackEdition}`,
      btn: "Select Reward",
    },
    {
      h3: "Mahogany Special Edition",
      pledge: "Pledge $200 or more",
      p: `                You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
      qty: "0",
      btn: "Out of Stock",
    },
  ];

  return (
    <>
      <img
        src={Image}
        className="absolute left-0 right-0 top-0 z-[-1] w-full"
      />
      <Header />

      <main className="w-full p-6 lg:mx-auto mb-28 mt-40 lg:w-[50vw] lg:max-w-[50vw]">
        <FirstSection setIsModalOpen={setIsModalOpen} />
        <SecondSection />
        <ThirdSection pricing={pricing} />
      </main>
      {isModalOpen && (
        <SelectionModal
          bambooStand={bambooStand}
          setBambooStand={setBambooStand}
          blackEdition={blackEdition}
          setBlackEdition={setBlackEdition}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default App;
