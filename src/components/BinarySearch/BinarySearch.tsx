import React, { ChangeEvent, useState } from "react";
import { motion, Reorder } from "framer-motion";

import { delay } from "@/utils/helpers/other";

import styles from "./BinarySearch.module.scss";

const BinarySearch = () => {
	const [array, setArray] = useState<number[] | string[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [value, setValue] = useState<number>(5);
	const [middleIndex, setMiddleIndex] = useState<number>();

	const getBgColor = () => {
		return `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
	};

	const bin = async () => {
		let lowIndex = 0;
		let highIndex = array.length - 1;
		while (lowIndex <= highIndex) {
			await delay(1000);
			const middleIndex = Math.floor((lowIndex + highIndex) / 2);
			const newArray = array.slice(lowIndex, highIndex + 1);
			const middle = Math.floor((newArray.length - 1) / 2);
			setMiddleIndex(middle);
			const middleValue = array[middleIndex];
			await delay(1000);
			if (middleValue === +value) {
				setArray([value]);
				await delay(1000);
				return middleIndex;
			} else if (middleValue > value) {
				highIndex = middleIndex - 1;
				setArray(array.slice(lowIndex, highIndex + 1));
			} else if (middleValue < value) {
				lowIndex = middleIndex + 1;
				setArray(array.slice(lowIndex, highIndex + 1));
			} else {
				return null;
			}
			setMiddleIndex(-1);
		}
	};

	return (
		<>
			<div>
				<input
					value={array.join()}
					onChange={(evt: ChangeEvent<HTMLInputElement>) => setArray(evt.target.value.split(","))}
				/>
				<input value={value} onChange={(evt: ChangeEvent<HTMLInputElement>) => setValue(+evt.target.value)} />
				<button onClick={() => bin()}>Ok</button>
			</div>

			<div className={styles.itemsContainer}>
				<Reorder.Group axis="x" values={array} onReorder={setArray} className={styles.itemsContainer}>
					{array.map((item, index) => (
						<Reorder.Item key={item} value={item}>
							<motion.div
								transition={{ duration: 0.5 }}
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{
									opacity: 1,
									scale: index === middleIndex ? 1.2 : 1,
									backgroundColor: getBgColor(),
								}}
								className={styles.item}
							>
								{item}
							</motion.div>
						</Reorder.Item>
					))}
				</Reorder.Group>
			</div>
		</>
	);
};

export default BinarySearch;
