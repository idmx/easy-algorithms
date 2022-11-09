import React, { FC } from "react";

import styles from "../uiComponents.module.scss";

interface Props {
	children: React.ReactNode;
	classes?: string;
}

const Descriptions: FC<Props> = ({ children, classes }) => {
	return <div className={`${styles.descriptions} ${classes}`}>{children}</div>;
};

export default Descriptions;
