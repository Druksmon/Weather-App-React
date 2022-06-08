import Home from "./components/Home/Home";
import {ApiProvider} from "./components/Context/ApiContext";
import './index.css'


function App() {
    return (
        <div className="App">
            <ApiProvider>
                <Home/>
            </ApiProvider>
        </div>
    );
}

export default App;
