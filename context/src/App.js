import React, { useState, createContext, useContext } from 'react';
import logo from './logo.svg';
import './App.css';

// using context
// create a ctx object - (createContext)
// use the ctx obj "Provider" component to wrap the component tree
// pass in the data we want to share to the component tree - this is done via a "value" prop that the Provider receives
// consume that data in some child (nested) component

const PersonContext = createContext();
const TitleContext = createContext();

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
				<HookPerson otherProps={"I'm some different prop"} />
        <RenderPropPerson otherProps={"I am a Render Prop Person."}/>
			</PersonContext.Provider>

			{/*<Provider>
        <Person />
    </Provider> 
    ^^Option 2 */}
		</div>
	);
}

const HookPerson = props => {
	const [
		person,
		setPerson,
	] = useContext(PersonContext); // consuming "person" from PersonContext!
  // const {name} = useContext(PersonContext) This is a second option if not passing an array!
  const title = useContext(TitleContext)
	return (
		<div>
			<h1>Hook Context: {person.name}</h1>
			<h2>Hook Prop: {props.otherProps}</h2>
			{/* <h1>{name}</h1> This can be used if not passing an array */}
		</div>
	);
};

// Render prop pattern to consume data from ctx without using the "useContext" hook

const RenderPropPerson = () => {
	return (
		<div>
      <h1>Hello Students!</h1>
			<PersonContext.Consumer>
				{([person, setPerson]) => <h1>{person.name}</h1>}
			</PersonContext.Consumer>
		</div>
	);
};

export default App;
