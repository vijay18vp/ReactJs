// Import and Export in React
// Import and export are fundamental concepts in React that enable you to organize your code into separate, reusable modules. React follows JavaScript’s ES6 module system, making it easy to break down complex applications into smaller, manageable pieces.
// Why Use Import/Export?
// 	•	Reusability: Create components once and use them throughout your application
// 	•	Organization: Keep your codebase modular and maintainable
// 	•	Collaboration: Share components easily between team members
// 	•	Clean Structure: Avoid putting all code in a single file
// Types of Exports
// 1. Named Exports
// Named exports allow you to export multiple components or functions from a single file. You must use the exact exported names when importing.

export const Button = () => {
  return <button>Click Me!</button>;
}

export const Input = () => {
  return <input placeholder="Type Here" />;
}

// Key characteristics:
// 	•	Use curly braces `{}` when importing
// 	•	Import names must match exported names exactly
// 	•	Can have multiple named exports per file

// 2. Default Exports
// Default exports allow you to export one primary component or function per file. You can rename default imports when importing.
// Example - Exporting:
function Greet() {
    return (
        <div>
            <h1> Hello I am learning ! </h1>
        </div>
    )
}
export default Greet;


// Best Practices
// 	•	Use default exports for main components
// 	•	Use named exports for utility functions or multiple related components
// 	•	Be consistent with your export style across the project
// 	•	Use descriptive names for exports
// and atlast The whole File can be example of Multiple Exports 