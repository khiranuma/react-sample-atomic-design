import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";
import { Top } from "../components/pages/Top";
import { HeaderOnly } from "../components/templates/HeaderOnly";
import { Users } from "../components/pages/Users";
import { Page404 } from "../components/pages/Page404";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultTemplate>
            <Top />
          </DefaultTemplate>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
        <Route path="*">
          <DefaultTemplate>
            <Page404 />
          </DefaultTemplate>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
