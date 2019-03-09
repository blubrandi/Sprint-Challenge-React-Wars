# Answers

1.  What is React JS and what problems does it try and solve?

React is a JavaScript library that allows us to create reusable components to build our applications.  Using components, we're able to scale our applications and keep our workflow and code cleaner.  It uses a virtual DOM and only updates changed components and data, rather than re-endering all components and data.

1.  What does it mean to _think_ in react?
Thinking in react is being able to think of things in terms of reusable components and breaking down items into into smaller parts that act as components that can be reused in multiple places.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional compoentent is a component made up of a function that returns JSX.  A class component contains state and lifecycle methods, and must always contain a render() method and constructor() method.

1.  Describe state.

State is simply an object with properties and can be initialized by props.  By using setState(), state becomes mutable, and updates props, by re-rendering the specified props of our data.


1.  Describe props.

Props are the actual properties of an object, and are passed to children components.  Props are immutable and can only be changed by using state to update it's properties.