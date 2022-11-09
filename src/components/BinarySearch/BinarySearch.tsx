import React, { ChangeEvent, useState } from "react";
import { motion, Reorder } from "framer-motion";

import { binarySearch } from "@/algorithms/binary-search";
import Button from "@/UI/Buttons";
import Input from "@/UI/Input";
import Page from "@/UI/Page/Page";
import { delay } from "@/utils/helpers/other";
import { binarySearchText } from "@/utils/helpers/texts";

import styles from "./BinarySearch.module.scss";

const BinarySearch = () => {
	const [array, setArray] = useState<number[] | string[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [inputArray, setInputArray] = useState<number[] | string[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	const [value, setValue] = useState<number>(8);
	const [middleIndex, setMiddleIndex] = useState<number>();

	const setAllArray = (values: string[]) => {
		setArray(values);
		setInputArray(values);
	};

	const bin = async (array: string[] | number[]) => {
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
			if (+middleValue === +value) {
				setArray([value]);
				setMiddleIndex(-1);
				await delay(1000);
				return middleIndex;
			} else if (+middleValue > +value) {
				highIndex = middleIndex - 1;
				setArray(array.slice(lowIndex, highIndex + 1));
			} else if (+middleValue < +value) {
				lowIndex = middleIndex + 1;
				setArray(array.slice(lowIndex, highIndex + 1));
			} else {
				return null;
			}
			setMiddleIndex(-1);
		}
	};

	const handleClick = () => {
		setArray(inputArray);
		bin(inputArray);
	};

	return (
		<Page>
			<Page.Visualization>
				<h1>Бинарный поиск</h1>
				<p className={styles.text}>
					Введите <span className={styles.bold}>отсортированный</span> массив чисел и число, которое
					необходимо найти
				</p>
				<div className={styles.inputContainer}>
					<Input
						value={inputArray.join()}
						onChange={(evt: ChangeEvent<HTMLInputElement>) => setAllArray(evt.target.value.split(","))}
					/>
					<Input
						value={value}
						onChange={(evt: ChangeEvent<HTMLInputElement>) => setValue(+evt.target.value)}
					/>
					<Button onClick={handleClick}>Начать поиск</Button>
				</div>

				<div className={styles.itemsContainer}>
					<Reorder.Group axis="x" values={array} onReorder={setArray} className={styles.itemsContainer}>
						{array.map((item, index) => (
							<Reorder.Item key={index} value={item}>
								<motion.div
									transition={{ duration: 0.5 }}
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{
										opacity: 1,
										scale: index === middleIndex ? 1.2 : 1,
									}}
									className={`${styles.item} ${index === middleIndex && styles.middle}`}
								>
									{item}
								</motion.div>
							</Reorder.Item>
						))}
					</Reorder.Group>
					{!array.length && <p className={styles.error}>Ничего не найдено</p>}
				</div>
			</Page.Visualization>
			<Page.Functions>
				<h2>Код поиска</h2>
				<p className={styles.functionText}>{binarySearch}</p>
			</Page.Functions>
			<Page.Descriptions classes={styles.binaryText}>{binarySearchText}</Page.Descriptions>
		</Page>
	);
};

export default BinarySearch;
