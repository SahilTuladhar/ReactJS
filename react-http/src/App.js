import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import FunctionCountTwo from './components/FunctionCountTwo';
import Parent from './components/Parent';
import ObjectState from './components/ObjectState';
import ArrayState from './components/ArrayState';

function App() {
  return (
    <div className="App">
      <ArrayState />
      {/* <ObjectState /> */}
      {/* <FunctionCountTwo />
      <Parent /> */}
      {/* <ClassCounter />
      <FunctionCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
