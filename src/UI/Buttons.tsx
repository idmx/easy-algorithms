import React, { FC } from "react";

import styles from "./uiComponents.module.scss";

interface Props {
	onClick: () => void;
	children: string;
	classes?: string;
}

const Button: FC<Props> = ({ onClick, children, classes }) => {
	return (
		<button className={`${styles.button} ${classes}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
