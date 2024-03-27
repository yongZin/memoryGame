import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from './component/Content';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Content />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App