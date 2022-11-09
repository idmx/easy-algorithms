export const binarySearch = (array: number[], value: number) => {
	let lowIndex = 0;
	let highIndex = array.length - 1;

	while (lowIndex <= highIndex) {
		const middleIndex = Math.floor((lowIndex + highIndex) / 2);
		const middleValue = array[middleIndex];
		if (middleValue === value) {
			return middleIndex;
		} else if (middleValue > value) {
			highIndex = middleIndex - 1;
		} else if (middleValue < value) {
			lowIndex = middleIndex + 1;
		} else {
			return null;
		}
	}
};
