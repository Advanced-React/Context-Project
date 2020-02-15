import React, { useState, createContext, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

// using context
// create a ctx object - (createContext)
// use the ctx obj "Provider" component to wrap the component tree
// pass in the data we want to share to the component tree - this is done via a "value" prop that the Provider receives
// consume that data in some child (nested) component

const PersonContext = createContext();

function App () {
	const [
		person,
		setPerson,
	] = useState({ name: 'Harry Potter' });

	// const {Provider} = PersonContext
	// Option 2^^^

	return (
		<div className='App'>
			<PersonContext.Provider
				value={[
					person,
					setPerson,
				]}>
				<Person otherProps={"I'm some different prop"} />
			</PersonContext.Provider>

			{/*<Provider>
        <Person />
    </Provider> 
    ^^Option 2 */}
		</div>
	);
}

const Person = props => {
	const [
		person,
		setPerson,
	] = useContext(PersonContext); // consuming "person" from PersonContext!
	// const {name} = useContext(PersonContext) This is a second option if not passing an array!
	return (
		<div>
			<h1>{person.name}</h1>
			<h2>{props.otherProps}</h2>
			{/* <h1>{name}</h1> This can be used if not passing an array */}
		</div>
	);
};

// Render prop pattern to consume dcata from ctx without using the "useContext" hook

const RenderPropPerson = () => {
  
}

export default App;
