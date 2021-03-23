const fs=require('fs')
const targetPath = './src/environments/environment.ts';
const colors = require('colors');
require('dotenv').config();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
   apiURL: '${process.env.API_URL}',
   production: '${process.env.PRODUCTION}'
};
`;
fs.writeFile(targetPath, envConfigFile, function (err) {
    if (err) {
        throw console.error(err);
    } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
    }
 });
 