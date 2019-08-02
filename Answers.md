# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a Javascript Library that tries to solve the issue of dealing with large amounts of data in a and creating user interfaces. React uses components that allow for incredibly robust reusability. Inside those components is also things like "state" which allows a developer to manipulate the data.

1. What does it mean to think in react?

Thinking in React primarily revolves around thinking in smaller increments of code that are put together to form a large application. You also have to think about how values are passed throughout an application.

1. Describe state.

State can literally be described as data, but it's data that can be incredibly manipulated. State can change, and likely will change, within a component.

1. Describe props.

Props is also data, but it is the data that is passing to child components of a React application. There can be as many props as needed, but you have to write a dot notation to signify with prop you are calling within the component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is something that occurs outside of the function scope. Whenever we use axios to pull data from an API, this is considered a side effect. If the component requires us to clean up leftover state, it is a side effect. "useEffect" helps us to counter it.
