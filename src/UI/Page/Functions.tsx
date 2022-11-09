import React, { FC } from "react";

import styles from "../uiComponents.module.scss";

interface Props {
	children: React.ReactNode;
	classes?: string;
}

const Functions: FC<Props> = ({ children, classes }) => {
	return <div className={`${styles.functions} ${classes}`}>{children}</div>;
};

export default Functions;
