type Arr = [1, 2, 3, 4]

type Reverse<T extends any[]> = T extends [infer first, ...infer rest] ? [...Reverse<rest>, first] : T

type A = Reverse<Arr> // [4,3,2,1]

const fn = () => {
	const arr = [1, 3, 2]
	const x = '1'
	if (arr.includes(x)) {
	}
}
