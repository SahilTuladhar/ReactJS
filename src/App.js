import logo from './logo.svg';
import './App.css';
import HomePage from './components/homePage';
import Introduction from './components/Introduction';
import Hello from './components/withoutJSX';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import StyleSheet from './components/StyleSheet';
import InlineStyles from './components/InlineStyles';
import ModuleStyles from './components/ModuleStyles';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';

function App() {
  return (
    <div className="App">
      <FRParentInput />
      {/* <FocusInput /> */}
      {/* <RefDemo /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <ModuleStyles />
      <StyleSheet />
      <InlineStyles /> */}
      {/* <ListRendering /> */}
      {/* <ConditionalRendering /> */}

     {/* <ParentComponent /> */}
      {/* <FunctionClick />
      <ClassClick />
      <HomePage name = 'Sahil'/>
  
      <Introduction name = "Messi">The G.O.A.T</Introduction>
      <Introduction name = "Saka"> <button>Click Me</button></Introduction>
      <Introduction name = "Son"/>
      <Message />
      <Counter/> */}
     
    </div>
  );
}

export default  App;
