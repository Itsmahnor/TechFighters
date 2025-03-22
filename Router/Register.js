const Router = require('express').Router();
const User = require('../Models/Register');

// Sign up / Enroll Courses
Router.post('/register', async (req, res) => {
  try {
    const { email, selectedCourses, ...otherDetails } = req.body;

    // Ensure selectedCourses is an array
    const courses = Array.isArray(selectedCourses)
      ? selectedCourses
      : [selectedCourses];

    // Check if the user already exists
    let user = await User.findOne({ email });

    if (user) {
      // Add only new courses to the user's courses array
      const coursesToAdd = courses.filter(course => !user.courses.includes(course));

      if (coursesToAdd.length === 0) {
        return res.status(400).json({ message: 'You have already applied for these courses' });
      }

      user.courses.push(...coursesToAdd);
      await user.save();
      return res.status(200).json({ message: 'Courses added successfully', courses: user.courses });
    }

    // If user doesn't exist, create a new user with the courses array
    user = new User({
      ...otherDetails,
      email,
      courses
    });

    await user.save();
    res.status(200).json({ message: 'User registered and courses added successfully', courses: user.courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = Router;
