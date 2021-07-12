import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import RetailSales from './page/RetailSales';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Header />
				<RetailSales />
			</Provider>
		</div>
	);
}

export default App;
