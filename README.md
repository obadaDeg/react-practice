# Tic-Tac-Toe - Dive Deeper on React

## What I've learned?

1. If were some static content, we can add it to the html file and its will work correctly.

2. React doesn't immediatlly change the state, but its **schedual** these updates to be perforemed.

3. User Input & Two-Way-Binding.

   - two way binding: listening to a change and feed out the value of this change. For example in the input field, we are listening to the change on the input field and reflect this change on the value of the input field which shows the new state of the value.

4. when handling with object or array (any reference object) its prefered to copy copy first, then handle the required data.

5. Lifting the state up: when some seprate components need to handle the same data, instead of making 2 different states in each component, we can lift the state up to the closest common ansestor component share the data through it. 
