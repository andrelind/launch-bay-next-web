const fs = require("fs");

// const path =
//   './node_modules/react-primitives/lib/injection/react-native-web.js';
// const file = fs.readFileSync(path, 'utf8');
// const fixed = file.replace(
//   'react-native-web/dist/cjs/exports/StyleSheet/ReactNativeStyleResolver',
//   'react-native-web/dist/cjs/exports/StyleSheet/createStyleResolver'
// );

// fs.writeFileSync(path, fixed, 'utf8');
// console.log('Patched react-native-web'); // eslint-disable-line

fs.copyFileSync(
  "node_modules/xwing-miniatures-font/dist/xwing-miniatures-ships.ttf",
  "public/static/fonts/xwing-miniatures-ships.ttf"
);

fs.copyFileSync(
  "node_modules/xwing-miniatures-font/dist/xwing-miniatures.ttf",
  "public/static/fonts/xwing-miniatures.ttf"
);
