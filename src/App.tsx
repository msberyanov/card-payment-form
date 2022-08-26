import React from 'react';
import './App.css';
import { Card } from "./components/card/card";
import { useInputForm } from "./components/form/hooks/use-input-form";

interface InputContextProps {
  cardNumber: string;
  cardHolder: string;
  cardExpirationDate: string;
}

const InputContext = React.createContext<InputContextProps>({} as InputContextProps);

export const useInputContext = () => React.useContext(InputContext);

function App() {
  const [
    cardNumber,
    setCardNumber,
    cardHolder,
    setCardHolder,
    cardExpirationDate,
    setCardExpirationDate,
    CardNumberInputForm,
    CardHolderInputForm,
    CardExpirationDateInputForm,
    CardInputForm
  ] = useInputForm();

  return (
    <>
      <InputContext.Provider value={{cardNumber, cardHolder, cardExpirationDate}}>
        <Card/>
      </InputContext.Provider>
      {CardInputForm}
    </>
  );
}

export default App;
