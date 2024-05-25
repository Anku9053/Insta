// const cron = require('node-cron');
// const { exec } = require('child_process');

// // Schedule the updateData.js script to run every minute
// cron.schedule('* * * * *', () => {
//   exec('node UpdateJson.js', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`stderr: ${stderr}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//   });
// });
