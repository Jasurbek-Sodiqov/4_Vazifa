import React, { useState } from "react";
import "./App.css";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");

  const recognizeCompany = () => {
    const cleanedNumber = phoneNumber.replace(/\D/g, "");
    const prefix = cleanedNumber.slice(0, 6);
    if (prefix === "+99891") {
      setCompany("Belline");
    } else if (prefix === "+99897") {
      setCompany("MobiUz");
    } else if (prefix === "+99894" || prefix === "+99893") {
      setCompany("Ucell");
    } else {
      setCompany("Noma'lum kompaniya");
    }
  };

  return (
    <div className="App">
      <h1>Raqamni Kiriting</h1>
      <input
        type="tel"
        placeholder="Telefon raqamini kiriting"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={recognizeCompany}>Kompaniyani Aniqlash</button>
      <p>{`Telefon raqamingiz oldida ${company} bor.`}</p>
    </div>
  );
}

export default App;
