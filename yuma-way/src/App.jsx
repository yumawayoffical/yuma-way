import Navigation from "./components/navigation/navigation.componext";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top.component";
import UnauthorizedRoutes from "./setup/routes/unauthorized-routes.component";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <UnauthorizedRoutes />
    </>
  );
}

export default App;
