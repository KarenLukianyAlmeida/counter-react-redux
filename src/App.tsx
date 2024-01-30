import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { actionsCreator as actionsCreator } from './redux/actions';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  }
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  return (
    <>
    <h1>Contador</h1>
    <h2>{ rootState.counterReducer.count }</h2>
    <h2>{ rootState.counterReducer.clicks }</h2>
    <button onClick={ () => dispatch(actionsCreator())}>Incrementa 1</button>
    <button onClick={ () => dispatch(actionsCreator(5))}>Incrementa 5</button>
    </>
  )
}

export default App;
