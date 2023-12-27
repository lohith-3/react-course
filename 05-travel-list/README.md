# Travel List App

# State Vs Props

The difference between state vs props

# State

State is internal data, data which is owned by the component in which it is declared.

state on the other hand can be thought of components memory because it can hold data over time. so across multiple re-renders.

Now state can be updated by the component itself and as we already know, this will then cause the component to be re-rendered by react.

Therefore we can use this state to make components interactive.

State is used to make components interactive

# Props

props is external data, so data that is owned by the parent component and you can think of props as function parameters. so as a communication channel between parent and child components where parents can pass data into children.

props are read-only they cannot be modified by the component that is receiving them.

when the child component receives new updated props, that will actually also cause the component to re-render.

So in conclusion, whenever a piece of state is passed as a prop, when that state updates both components are re-rendered.

props, are data sent by parent component to configure the child component.

# What is "Thinking in React" ?

Well, while you are building an application, thinking in react means that you have a very good mental model of how and when to use all the react tools like component, state, props, general data flow, effects and many more.

It's also about always thinking in terms of state transitions rather than in element mutations as we have learned before.

## The "THINKING IN REACT" Process :

Refer pdf slide

# Lifting State Up

So, basically what that means is that whenever multiple sibling components need access to the same state, we move that piece of state up to the first common parent component.

Refer pdf
