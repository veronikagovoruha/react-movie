import UserRoutes from "./UserRoutes";
import "./index.css";
import Header from "./components/Header";

function App(){
  return (
    <div className="container">
      <Header />
      <UserRoutes />
    </div>
    
  );
};
export default App;