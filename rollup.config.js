import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
	input: './src/index.ts',
	output: {
		file: './lib/index.js',
		format: 'esm',
		sourcemap: true
	},

	plugins: [ts(), terser()]
}
