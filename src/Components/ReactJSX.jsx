// JSX bridges the gap between JavaScript logic and HTML markup by allowing you to write HTML-like code directly in JavaScript:
import React from 'react';

export function MyComponent() {
  const isLoggedIn = false;
  
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

function Welcome(){
    const userName = "Vijay";
    return(
        <h2>Hello {userName} !</h2>
    )
}

export default Welcome ;

//example no-3
export function FruitList() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};


// JSX = HTML + JavaScript: You can write HTML-like code in JavaScript files

// 	2.	Use {} for JavaScript: Whenever you want to use JavaScript variables or expressions, wrap them in curly braces

// 	3.	className not class: Remember this key difference from HTML

// 	4.	One parent element: Always wrap multiple elements in a single parent

// 	5.	Close all tags: Every tag must be closed, even self-closing ones like `<img />`