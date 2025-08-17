import Counter from "./Components/ClickEvents&FunctionCall/counterEvent";
import { Button , Input } from "./Components/Import";
import Greet from "./Components/Import";
import Welcome , {MyComponent ,FruitList } from "./Components/ReactJSX";

function App (){
  return (
    <div>
      <Button/>
      <Input/>
      <Greet/>
      <Welcome/>
      <MyComponent/>
      <FruitList/>
      <Counter/>
      
    </div>
  )
}

export default App;