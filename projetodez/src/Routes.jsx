import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Clientes from "./pages/Clientes/Clientes";
import Form from './pages/Form/Form';
import FormDois from './pages/FormDois/FormDois';
import FormTres from "./pages/FormTres/FormTres";
import Save from './pages/Save/Save';
const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      
        <Route path="/" element={<Form />} />
        <Route path="/dados-2" element={<FormDois />} />
        <Route path="/dados-finalizar" element={<FormTres />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/save" element={<Save />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;