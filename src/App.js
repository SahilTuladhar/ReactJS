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
import PortalsDemo from './components/PortalsDemo';
import Modal from './components/Modal';
import BackGroundDemo from './components/BackGroundDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import CommonCounter from './components/CommonCounter';
import ClickCounterTwo from './components/ClickCountertwo';
import HoverCounterTwo from './components/HoverCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary>
      <Hero heroName ='SuperMan' />  
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ='Batman' />  
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName ='Joker' /> 
      </ErrorBoundary> */}
    
      {/* <ClickCounter name= 'Sahil' number = {17}/>
      <HoverCounter name = 'Messi' number = {10}/> */}
      <CommonCounter step = {5} render = {(count , incrementCount) => <ClickCounterTwo count = {count} incrementCount ={incrementCount} name = 'Sahil' number = {17} />}/>

      <CommonCounter step = {10} render = {(count , incrementCount) => <HoverCounterTwo count = {count} incrementCount ={incrementCount} name = 'Messi' number = {10} />}/>
      
      
      
      {/* <BackGroundDemo /> */}
      {/* <PortalsDemo /> */}
      {/* <FRParentInput /> */}
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
