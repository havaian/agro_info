const cron = require("node-cron");

function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
  const length = 128;
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

// Import your mongoose model
const User = require('../token/model');

// Define the cron schedule
const cronSchedule = '0 0 * * *'; // Every Monday at 00:00 (UTC+5)

// Set up the cron job
cron.schedule(cronSchedule, async () => {
  try {
    const users = await User.find();
    for (const user of users) {
      const newSecret = generateRandomString(); // Use your generateRandomString function here
      await User.findByIdAndUpdate(user._id, { $set: { secret: newSecret } });
    }
    console.log('Secret fields updated successfully');
  } catch (error) {
    console.error('Error updating secret fields:', error);
  }
});