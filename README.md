# Code Challenge:

## Introduction:

Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks:

Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:

Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:

This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:

Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:

Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:

Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>
Question 1: How did you manage to fetch the list and what tool did you use?<br>

    When the component loaded, I retrieved the Pokémon list using React's useEffect hook. A GET request was sent to the Pokémon API using the fetch API, and the response was converted to JSON. I used useState to store the list in the component's state and then presented the Pokémon names as a straightforward list.

Question 2: What steps would you take to future improve this?<br>

    To make things more organized, move the API logic to a separate file.
    To maintain the Pokémon list on a global scale, use Redux or another equivalent state management framework.
    Display a loading spinner or animation when the data is being fetched.

commit the code as `task-1`<br>

## Task 2:

Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed

commit the code as `task-2`<br>

## Task 3:

Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:

Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>

    By centralizing actions, reducers, and action creators, createSlice streamlines Redux. In contrast to standard reducers that need more boilerplate and manual updates, it employs Immer for immutability, allowing you to create "mutating" code.

Question 5: Describe the benefits of immutable code.<br>

    By preventing unwanted data changes, immutable code facilitates debugging, allows time-travel debugging, and enhances performance by optimizing state comparison for re-renders.

commit the code as `task-4`<br>

## Task 5:

Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store
Question 6: How can you verify the action has been dispatched?

    Throughout development, I usually utilize the Redux DevTools plugin to confirm that an action has been dispatched in Redux. I can view every action that has been sent, along with its payload and the way the state is affected by it. I might provide a middleware that records activities as they go through the store if I need to programmatically check in code.

## Task 6:

Question 7: explain the use of `useEffect` hook in React

    Side effects are implemented in functional components using the useEffect hook. It can be used for things like data retrieval, DOM updates, and event subscription. It executes after the component renders.

Question 8: What is A High Order Component?

    A function that takes a component and returns a new component with extra properties or behavior is known as a Higher Order Component (HOC).

Question 9: What use cases would a HOC be usefull?

    HOCs are excellent for reusing functionality, handling authentication, injecting props, managing state, and enabling conditional rendering across several components.

Question 10: What does it indicate when a component is prefixed with `use` and `with`

    Use a prefix to indicate that the component or function is a custom hook in React. Custom hooks let you reuse logic across many components.

Question 11: What is a Generic type in typescript?

    A Generic type in TypeScript enables you to write reusable components or functions that work with any type, maintaining type safety without defining the precise type.

Question 12: Whats the difference between a controlled and uncontrolled input in React?

    Controlled Input: The component's state determines the value of the input field (value prop).

    Uncontrolled Input: The input value is managed by the DOM, and you access it via a reference.
