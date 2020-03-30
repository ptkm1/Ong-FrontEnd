import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/logOn";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import Casos from "./pages/Casos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/casos/novo" component={Casos} />
      </Switch>
    </BrowserRouter>
  );
}
