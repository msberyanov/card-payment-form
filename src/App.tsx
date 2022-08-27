import React, { useEffect } from 'react';
import './App.css';
import { Card } from "./components/card/card";
import { useInputForm } from "./components/form/hooks/use-input-form";

interface InputContextProps {
  cardNumber: string;
  cardHolder: string;
  cardCvv: string;
  cardExpirationDateMonth: string;
  cardExpirationDateYear: string;
  cardTurned: boolean;
}

const InputContext = React.createContext<InputContextProps>({} as InputContextProps);

export const useInputContext = () => React.useContext(InputContext);

function App() {
  const [
    cardNumber,
    cardHolder,
    cardCvv,
    cardExpirationDateMonth,
    cardExpirationDateYear,
    CardInputForm,
    cardTurned,
    turnCardFront
  ] = useInputForm();

  useEffect(() => {
    document.getElementById("root")?.addEventListener("click", event => {
      if ((event.target as HTMLInputElement).className.includes("card-cvv-input-field")) {
        event.preventDefault();
      } else {
        turnCardFront();
      }
    });
  }, [turnCardFront]);

  return (
    <>
      <InputContext.Provider value={{cardNumber, cardHolder, cardCvv, cardExpirationDateMonth, cardExpirationDateYear, cardTurned}}>
        <Card/>
      </InputContext.Provider>
      {CardInputForm}
    </>
  );
}

export default App;
