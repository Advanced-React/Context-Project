import React, { useState, createContext, useContext } from 'react';
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
			<TitleContext.Provider value='Hello'>
				<PersonContext.Provider
					value={[
						person,
						setPerson,
					]}>
					<RenderPropPerson otherProps={'I am a Render Prop Person.'} />
					<HookPerson otherProps={"I'm some different prop"} />
				</PersonContext.Provider>
			</TitleContext.Provider>

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
	const title = useContext(TitleContext);
	return (
		<div>
			<h1>{title}</h1>
			<h2>Hook Context: {person.name}</h2>
			<h3>Hook Prop: {props.otherProps}</h3>
			{/* <h1>{name}</h1> This can be used if not passing an array */}
		</div>
	);
};

// Render prop pattern to consume data from ctx without using the "useContext" hook

const RenderPropPerson = () => {
	return (
		<div>
			<h2>Hello Students!</h2>
			<PersonContext.Consumer>
				{(
					[
						person,
						setPerson,
					],
				) => <h3>{person.name}</h3>}
			</PersonContext.Consumer>
			<TitleContext.Consumer>{Title => <h1>{Title}</h1>}</TitleContext.Consumer>
		</div>
	);
};

export default App;
