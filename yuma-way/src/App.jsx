import Navigation from "./components/navigation/navigation.componext";
import UnauthorizedRoutes from "./setup/routes/unauthorized-routes.component";

function App() {
  return (
    <>
      <Navigation />
      <UnauthorizedRoutes />;
    </>
  );
}

export default App;
