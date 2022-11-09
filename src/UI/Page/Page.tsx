import React from "react";

import Descriptions from "./Descriptions";
import Functions from "./Functions";
import Visualization from "./Visualization";

import styles from "../uiComponents.module.scss";

interface Props {
	children: React.ReactNode;
	classes?: string;
}

const Page = ({ children, classes }: Props) => {
	return <div className={`${styles.page} ${classes}`}>{children}</div>;
};

export default Page;

Page.Visualization = Visualization;
Page.Functions = Functions;
Page.Descriptions = Descriptions;
