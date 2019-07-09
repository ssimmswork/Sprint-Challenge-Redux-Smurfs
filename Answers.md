1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?



1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action - sends payloads of information that send data from an application to the store.

Reducers - specify how the application's state changes in response to actions sent to the store.

Store - is an object that holds the application's state tree.
The store holds the source of all the data which gives you controllability of the components.


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. Redux uses the store to hold application state. Meaning any component in the app can access it as long as they connect into it. The component state can only be updated within that specific component and passed down to its children through props.


1.  What is middleware?
middleware sits in between the dispatch and reducers, which means we can alter our dispatched actions before they get to the reducers or execute some code during the dispatch.




1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

it allows you to write actions creators that return a function instead of an action. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

the method that liks up our comopnents is .connect().