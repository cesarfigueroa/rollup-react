import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import flow from 'rollup-plugin-flow';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
  entry: 'src/index.jsx',
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    // Remove FlowType annotations
    flow(),

    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        'react',
        ['es2015', { modules: false }]
      ],
      plugins: ['external-helpers']
    }),

    nodeResolve({
      browser: true,
      jsnext: true,
      main: true,
      extensions: ['.js', '.jsx']
    }),

    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/lodash-es/**'],
      ignoreGlobal: false,
      sourceMap: false,
      namedExports: {
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react/react.js': ['Component', 'PropTypes', 'PureComponent']
      }
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
}
