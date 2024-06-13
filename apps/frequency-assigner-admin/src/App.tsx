import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FrequencyList } from "./frequency/FrequencyList";
import { FrequencyCreate } from "./frequency/FrequencyCreate";
import { FrequencyEdit } from "./frequency/FrequencyEdit";
import { FrequencyShow } from "./frequency/FrequencyShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FrequencyAssigner"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Frequency"
          list={FrequencyList}
          edit={FrequencyEdit}
          create={FrequencyCreate}
          show={FrequencyShow}
        />
      </Admin>
    </div>
  );
};

export default App;
