import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, substract } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const value = parseInt(document.querySelector("input").value);
    dispatch(add(value));
  };

  const handleSubtract = () => {
    const value = parseInt(document.querySelector("input").value);
    dispatch(substract(value));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을 <button onClick={handleAdd}>더할게요</button>
        <button onClick={handleSubtract}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
