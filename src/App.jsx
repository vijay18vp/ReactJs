import Counter from "./Components/ClickEvents&FunctionCall/counterEvent";
import ItemList from "./Components/ClickEvents&FunctionCall/data";
import LinkComponent from "./Components/ClickEvents&FunctionCall/preventDefault";
import { Button , Input } from "./Components/Import";
import Greet from "./Components/Import";
import Welcome , {MyComponent ,FruitList } from "./Components/ReactJSX";
import Profile from "./Components/State&Hooks/Profile";


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
      <LinkComponent/>
      <ItemList/>
      <Profile/>

     
      
    </div>
  )
}

export default App;