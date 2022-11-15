import React, { FC } from "react";

import styles from "./NavBar.module.scss";

export enum Algorithms {
	BINARY_SEARCH = "Бинарный поиск",
	SELECTION_SORT = "Сортировка выбором",
}

interface Props {
	algorithms: string[];
	selectedAlgorithm: Algorithms;
	setSelectedAlgorithm: (param: Algorithms) => void;
}

const NavBar: FC<Props> = ({ algorithms, selectedAlgorithm, setSelectedAlgorithm }) => {
	const setAlgorithm = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setSelectedAlgorithm((evt.target as HTMLDivElement).textContent as Algorithms);
	};

	return (
		<div className={styles.navContainer}>
			{algorithms.map((algorithm) => (
				<div
					key={algorithm}
					className={`${styles.navItem} ${selectedAlgorithm === algorithm && styles.selected}`}
					onClick={setAlgorithm}
				>
					{algorithm}
				</div>
			))}
		</div>
	);
};

export default NavBar;
