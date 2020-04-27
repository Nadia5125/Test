import React, { Component } from 'react';
import './App.css';
import SweetAPI from './utils/SweetAPI';
import UserAPI from './utils/UserAPI';
import ItemImages from './components/itemImages';
import CreateItem from './components/createItem';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: '',
			itemQuantity: '',
			itemType: '',
			itemImage: '',
			fruits: [],
			sweets: [],
			allItemsForSale: []
		};
	}

	componentDidMount() {
		this.getUsers();
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center titleSpace">Movie</h1>
				</div>
				<div className="col-md-9 borderLine center-block">
					<ItemImages
						items={this.state}
						handleClick={this.updateAddQuantity}
						handleMinusClick={this.updateMinusQuantity}
						handleDeleteClick={this.deleteFromStore}
					/>
				</div>
				<div className="offset-md-1 col-md-2 borderLine">
					<CreateItem handleChange={this.onHandleChange} value={this.state} submitClick={this.addToStore} />
				</div>
			</div>
		);
	}

	//============================== Universal Functions  Start ==========================================================

	//getting input boxes to add item
	onHandleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	//updates item quantity
	updateAddQuantity = (id, quantity, type, event) => {
		event.preventDefault();
		console.log(type);

		if (type === 'Fruit') {
			this.addUserQuantity(id, quantity);
		} else if (type === 'Sweet') {
			this.addSweetsQuantity(id, quantity);
		}
	};

	//minus item quantity
	updateMinusQuantity = (id, quantity, type, event) => {
		event.preventDefault();
		if (type === 'Fruit') {
			this.minusUserQuantity(id, quantity);
		} else if (type === 'Sweet') {
			this.minusSweetsQuantity(id, quantity);
		}
	};

	//button click to add Sweet or Fruit to DB
	addToStore = (event) => {
		event.preventDefault();
		const { itemName, itemImage, itemQuantity, itemType } = this.state;
		if (itemType === '' || itemName === '' || itemImage === '' || itemQuantity === '') {
			alert('Please fill out all the boxes');
		}
		if (itemType === 'Fruit') {
			this.createUser();
		} else if (itemType === 'Sweet') {
			this.createSweet();
		}
	};

	deleteFromStore = (id, itemType, event) => {
		event.preventDefault();
		if (itemType === 'Fruit') {
			this.deleteFruit(id);
		} else if (itemType === 'Sweet') {
			this.deleteSweet(id);
		}
	};

	//============================== Fruit Functions  Start ==========================================================

	//getting all fruits from Database
	getUsers = () => {
		UserAPI.getUser()
			.then((res) => {
				this.setState({ users: res.data });
				this.getSweets();
			})
			.catch((err) => console.log(err));
	};

	//create Fruit Function
	createUser = () => {
		const { itemName, itemImage, itemQuantity, itemType } = this.state;
		const object = {
			item: itemName,
			quantity: itemQuantity,
			type: itemType,
			image: itemImage
		};
		UserAPI.createUser(object)
			.then((res) => {
				alert(`${res.data.item} have been added`);
				this.setState({
					itemName: '',
					itemImage: '',
					itemQuantity: '',
					itemType: ''
				});
				this.getUsers();
			})
			.catch((err) => console.log(err));
	};

	//adds fruit quantity
	addUserQuantity = (id, quantity) => {
		let newQuantity = (quantity += 1);
		const data = {
			fruitID: id,
			quantity: newQuantity
		};
		UserAPI.addFruit(data).then(this.getUsers()).catch((err) => console.log(err));
	};

	//minus fruit quantity
	minusFruitQuantity = (id, quantity) => {
		let newQuantity = (quantity -= 1);
		const data = {
			fruitID: id,
			quantity: newQuantity
		};
		UserAPI.minusFruit(data).then(this.getUsers()).catch((err) => console.log(err));
	};

	//deletes fruits
	deleteFruit = (id) => {
		const data = {
			fruitID: id
		};
		UserAPI.deleteFruit(data).then(this.getUsers()).catch((err) => console.log(err));
	};

	//============================== Sweet Functions  Start ==========================================================

	//getting all sweets from Database
	getSweets = () => {
		const usersState = this.state.users;
		SweetAPI.getSweets()
			.then((res) => {
				this.setState({
					sweets: res.data,
					allItemsForSale: [ ...usersState, ...res.data ]
				});
			})
			.catch((err) => console.log(err));
	};

	//Create Sweet Function
	createSweet = () => {
		const { itemName, itemImage, itemQuantity, itemType } = this.state;
		const object = {
			item: itemName,
			quantity: itemQuantity,
			type: itemType,
			image: itemImage
		};
		SweetAPI.createSweet(object)
			.then((res) => {
				alert(`${res.data.item} have been added`);
				this.setState({
					itemName: '',
					itemImage: '',
					itemQuantity: '',
					itemType: ''
				});
				this.getFruits();
			})
			.catch((err) => console.log(err));
	};

	//adds sweets quantity
	addSweetsQuantity = (id, quantity) => {
		let newQuantity = (quantity += 1);
		const data = {
			sweetID: id,
			quantity: newQuantity
		};
		SweetAPI.addSweet(data).then(this.getFruits()).catch((err) => console.log(err));
	};

	//minus sweets quantity
	minusSweetsQuantity = (id, quantity) => {
		let newQuantity = (quantity -= 1);
		const data = {
			sweetID: id,
			quantity: newQuantity
		};
		SweetAPI.minusSweet(data).then(this.getFruits()).catch((err) => console.log(err));
	};

	//deletes sweets
	deleteSweet = (id) => {
		const data = {
			sweetID: id
		};
		SweetAPI.deleteSweet(data).then(this.getFruits()).catch((err) => console.log(err));
	};
}

export default App;
