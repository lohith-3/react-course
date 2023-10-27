# What is State ?

So, we have learned how to pass data into a component by using props, which remember is data that's coming from outside the component.

But what if a component needs to actually hold its own data, and also hold it over time ? Also, what if we actually want to make our app interactive changing the UI as a result of an action ?

Well, that's where finally state comes into play.

So, state is basically data that a component can hold over time, and we use it for information that a component needs to remember throughout its lifecycle. Therefore we can think of state as being the memory of a component.

So a piece of state, or a state variable, is just one single actual variable in the component that we can define in our code.

Updating the state triggers react to re-render the component. So, gain whenever we update a piece of state in a component, this will make react re-render that component in the user-interface.

So, it will create a new updated view for that component.

When one single component is rendered, we call that a view. and so all the views combined together then make up the final user interface.

We change the state, we change the UI.
Persist local variabled between renders and re-renders.
