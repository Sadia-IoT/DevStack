# Project Name

## Dev Stack Builder

## Description

Dev Stack Builder is a simple and responsive web application that helps users explore different development technologies and create their own technology stack. Users can choose the technologies they need and easily add or remove them from their stack dynamically.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Toastify
- JSON

## 3 Features

- Explore a variety of development technologies
- Create and customize technology stack and get instant notifications when adding or removing technologies
- Easily add or remove technologies from the stack

#  React Questions

### 1. What is JSX, and why is it used in React?

**Answer:** JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. It makes React code easier to read and helps us create the UI.

### 2. What is the difference between props and state?

**Answer:** Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:** The `useState` hook is used to create and manage changing data in a component. In this project, I used it to manage the technology list, selected stack, and loading state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:** The `useEffect` hook is used to run some code when a component loads or when specific data changes. I used it to fetch the technology data from the JSON file when the page loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** A unique `key` helps React identify each item in a list. It helps React update the list correctly when items are added, removed, or changed.

### 6. What is conditional rendering?

**Answer:** Conditional rendering means showing different content based on a condition. In this project, I used it to show `Loading technologies...` while the data is loading and show the technology cards after the data is loaded.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** A parent component passes data and functions to a child component through props. In this project, `Technologies` passes the `stack` and remove functions to the `Sidebar`. The child uses those functions to send actions back to the parent.
