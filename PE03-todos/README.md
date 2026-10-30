# Input: 
This Todo application lets users add tasks by typing into a text box. They can write something like finishing an assignment or learning React Native. Once they’re done typing, they click the Submit button to save the task. The input box is linked to the app’s state, so any changes the user makes while typing are saved automatically.

# Process:
The app is built with React Native and Expo. It has separate parts for the heading, input box, and button. The main App component keeps track of the input text and a list of todos. When the user clicks Submit, the app checks if the input is empty. If it's not, it makes a new todo item with a title, a unique number, and a status showing if it's done or not. This item gets added to the list, and the input box is emptied.

# Output:
The app shows the heading, the input box, and the Submit button on the screen. The list of todos is also shown in the browser console so users can check what's been added.