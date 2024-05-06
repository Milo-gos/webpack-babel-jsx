import MiloReact from "../src/MiloReact/index";
import MyButton from "./components/Button";
/** @jsx MiloReact.createElement */
function App(props) {
    return (
        <div>
            <MyButton name='Button 1'/>
            <MyButton name='Button 2'/>
        </div>
    )
}
export default App
