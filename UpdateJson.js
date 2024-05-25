// const fs = require('fs');
// const path = require('path');

// const filePath = path.join(__dirname, 'insta.json');

// // Function to generate a random number between min and max
// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// // Function to update the JSON data
// const updateData = () => {
//   // Read the existing data from db.json
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

//   // Update the time for each post
//   const currentTime = new Date().toISOString();
//   data.posts.forEach(post => {
//     post.time = currentTime;
//   });

//   // Add more dynamic updates as needed
  
//   // Write the updated data back to db.json
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

//   console.log('Data updated successfully');
// };

// // Call the updateData function
// updateData();
