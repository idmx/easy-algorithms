import React, { FC } from "react";

import styles from "../uiComponents.module.scss";

interface Props {
	children: React.ReactNode;
	classes?: string;
}

const Visualization: FC<Props> = ({ children, classes }) => {
	return <div className={`${styles.visualization} ${classes}`}>{children}</div>;
};

export default Visualization;
