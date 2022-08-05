import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeadOnly } from "../components/templates/HeadOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route>
          <HeadOnly>
            <Users path="/users" />
          </HeadOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
