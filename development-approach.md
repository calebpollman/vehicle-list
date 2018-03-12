# Development Approach

Just a brief and minimal explanantion of the application design process.

## Why React and Redux?

I'm confident in React, and I understand the component structure well. As the application makes network calls, I felt it best to implement redux for the application store. 

## Containers and Components

There were to be two views, so I created the container components first and got them setup with the router and Redux store. As these were the only comopnents that would be altering application state, they are the only stateful components in the application. From there, I broke down the application in to the obvious components (`<SearchBar />, <ListItem />`) and proceeded to add more as needed (`<SearchBarInput />`). Used tdd for creating the components by writing a shallow render test for each component before writing the actual component.

## Searching

Used tdd for the search feature, the tests can be found in the *Vehicles.spec.js* [file](./src/containers/Vehicles/Vehicles.spec.js).

## CSS Choices

I've been playing around with CSS variables for a while now, and thought this would be a fun project to use them on, so I used vanilla CSS rather then using a CSS preproceesor.

## File Structure in `/src` directory

A basic rundown of where things are housed in the */src* directory.

### actions
Contains Redux actions.

### components
Houses the stateless components. Each component has a
    *\_\_snapshots\_\_*
    *ComponentName.jsx* 
    *ComponentName.css*
    *ComponentName.spec.js*

> Note the `<Icons />` component does not contain a spec file or snapshots directory.

### containers
Houses the stateless containers. Structured like this:

containers/
  /ContainerName
    *ContainerName.jsx* 
    *ContainerName.spec.js*

### reducers
Contains the Redux reducers.

### store
Contains the redux store

### style
styles/ 
  *global.css* 
  *index.js*
  *reset.css* 
  *variables.css*

### utils
Contains the *search.js* file