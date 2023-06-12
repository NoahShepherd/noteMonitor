// routes
import MainLayout from "./layout/main";


// theme
import BackgroundColor from "./mainColor/background";
import Router from "./route";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <>
    <BackgroundColor>
      <Router/>
    </BackgroundColor>
    </>
  );
}
