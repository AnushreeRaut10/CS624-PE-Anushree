# Input:
The CoreComponents mobile app lets users add their favorite MSCS course by typing it into a text input box. They can enter a course code like CS624. The app also uses a local image called icon.png and has predefined course details as part of the input data.These inputs are used to show the app's content.

# Process:
The app is built using React Native and includes an arrow-function component. The View component helps structure the layout, and ScrollView allows the user to scroll vertically. The Image component shows the app's icon, while Text components display course details. The TextInput field lets users enter their favorite course. The useState hook keeps track of the favorite course and updates the displayed text as the user types. StyleSheet is used to control the app's appearance, including colors, spacing, and text styles.

# Output:
The app shows eight core courses, two depth-of-study courses, and one capstone course. It also displays the selected favorite course.Information is organized using highlighted headings to make it easy to read.