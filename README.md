# OleronPortal

Weather and surf dashboard for Île d'Oléron.

To be included in [Oléron Villa site](https://oleronvilla.com).

Uses data stored in MongoDB Atlas, and presented using MongoDB Charts.

To try the app...

```
npm install
```

Add this to the `resolve` section in `node_modules/react-scripts/config/webpack.config.js`:

```js
fallback: {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify")
},
```

```
npm start
```