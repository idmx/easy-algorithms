import React, { useState } from "react";

import BinarySearch from "../BinarySearch/BinarySearch";
import NavBar, { Algorithms } from "../NavBar/NavBar";

const algorithms = [Algorithms.BINARY_SEARCH, Algorithms.SELECTION_SORT];

const App = () => {
	const [selectedAlgorithm, setSelectedAlgorithm] = useState(algorithms[0]);

	const getAlgorithmComponent = () => {
		switch (selectedAlgorithm) {
			case Algorithms.BINARY_SEARCH:
				return <BinarySearch />;
		}
	};

	return (
		<div>
			<NavBar
				algorithms={algorithms}
				selectedAlgorithm={selectedAlgorithm}
				setSelectedAlgorithm={setSelectedAlgorithm}
			/>
			{getAlgorithmComponent()}
		</div>
	);
};

export default App;
