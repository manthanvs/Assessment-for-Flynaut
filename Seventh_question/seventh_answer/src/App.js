import FunctionalComponent from './components/first/function.component';
import ClassComponent from './components/first/class.component';

import Usinghooks from './components/second/usinghooks.component.js';

// import UsinghooksExamples from './components/third/UsinghooksExamples.component.js';


function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <h1>-------------</h1>
      <ClassComponent />
      <h1>-------------</h1>
      <Usinghooks/>
      {/* <h1>-------------</h1>
      <UsinghooksExamples/> */}
    </div>
  );
}

export default App;
