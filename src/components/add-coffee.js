import React, { useState } from "react";
// import "./add-coffee.css";
import CoffeeForm from "./coffee-form";
import { coffeeCollection } from "../data/firebase";

function AddCoffee() {
	const [isSaving, setIsSaving] = useState(false);
	const [formMessage, setFormMessage] = useState("");

	const onCoffeeSumbit = async (title, rating, shopName, review, datePurchased, tags) => {
		setIsSaving(true);
		setFormMessage("");

		try {
			await coffeeCollection.add({
				title,
				rating,
				shopName,
				datePurchased,
				review,
				tags
			});
			setFormMessage("Saved successfully!");
			console.log("Saved!");
		} catch (error) {
			setFormMessage("Something went wrong. please try again!");
			console.error(error);
		}
	};

	return (
		<div className="add-container">
			<h1>Add Drink</h1>
			<CoffeeForm onSubmit={onCoffeeSumbit} isSaving={isSaving} message={formMessage} />
		</div>
	);
}

export default AddCoffee;
