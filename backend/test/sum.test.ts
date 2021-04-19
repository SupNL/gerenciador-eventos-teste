const sum = (...num: number[]) => {
	let total = 0;

	for (const n of num) {
		total += n;
	}

	return total;
}

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});
