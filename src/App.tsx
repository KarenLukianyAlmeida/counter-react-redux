import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreator as actionsCreator } from './redux/actions';

type RootState = {
  count: number;
};

function App() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <>
    <h1>Contador</h1>
    <h2>{ count }</h2>
    <button onClick={ () => dispatch(actionsCreator())}>Incrementa 1</button>
    <button onClick={ () => dispatch(actionsCreator(5))}>Incrementa 5</button>
    </>
  )
}

export default App;
