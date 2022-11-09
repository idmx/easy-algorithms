import React, { ChangeEvent, FC } from "react";

import styles from "./uiComponents.module.scss";

interface Props {
	onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
	value: number | string;
	classes?: string;
}

const Input: FC<Props> = ({ onChange, value, classes }) => {
	return <input onChange={onChange} value={value} className={`${styles.input} ${classes}`} />;
};

export default Input;
