# Pizza Menu Project

## Components

Components are the most fundamental concept in React, simply because
react applications are, in fact entirely made out of components.

React renders a view for each component, and all these views together
make up the user interface.

So we can also think of a component as being a piece of the user interface.

Now, one key property of components is that each component has its own
data, javascript logic and appearance.

Components can be reused, nested inside each other, and pass data between
them.

## What is JSX ?

So, JSX is a declarative syntax that we use to describe what component
look like and how they work based on their data and logic.

So, it's all about component appearance.

JSX is an extension version of javascript that allows us to embed
javascript, CSS and React components into HTML.

## Props

Props is essentially how we pass data between components, and in
particular from parent components to child components.

So we can imagine props as a communication channel between a parent
and a child component.

props are just like arguments passed to javascript functions as
parameters.

# React renders a component based on it's current data and that UI will always be kept in sync with that data.

### So this data React uses to render a component is made out of props and state

# State

State is basically internal component data that can be updated by the component's logic. So by the component itself

# Props

Props on the other hand is data that is coming from the parent component. SO from the outside basically. So it is the parent component who owns the data and so therefore it cannot be modified by the child component.

Instead props can only be updated the parent component itself.

Props are immutable, they can't be changed they are read-only

# Conditional Rendering

So, it is basically rendering some piece of UI, no matter if that's a piece of JSX, or if it's an entire component, based on a certain condition.

# React Fragments

A Piece of JSX, no matter where it is defined can only have in fact one root element.

A React Fragment basically lets us group some elements without leaving any trace in the HTML tree, so in the DOM.

# Section Summary

Components are the building blocks of any user interface in React.

Now each component is a self-contained piece of the user interface, which includes its own data, its own javascript logic, and its own appearance.

Now in practical terms, we write this appearance using a declarative syntax called JSX and its this block of JSX that ultimately get returned from each component and this JSX is what's going to describe exactly what the user will see on the screen when they use the application.
