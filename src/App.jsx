import Header from "./components/Header";
import initialEmails from "./data/emails";
import "./App.css";
import { useState } from "react";

function App() {
	// Use initialEmails for state
	// console.log(initialEmails);
	const [emails, setEmails] = useState(initialEmails);

	return (
		<div className="app">
			<Header />
			<nav className="left-menu">
				<ul className="inbox-list">
					<li
						className="item active"
						// onClick={() => {}}
					>
						<span className="label">Inbox</span>
						<span className="count">?</span>
					</li>
					<li
						className="item"
						// onClick={() => {}}
					>
						<span className="label">Starred</span>
						<span className="count">?</span>
					</li>

					<li className="item toggle">
						<label htmlFor="hide-read">Hide read</label>
						<input
							id="hide-read"
							type="checkbox"
							defaultChecked={false}
							// onChange={() => {}}
						/>
					</li>
				</ul>
			</nav>
			<main className="emails">
				{emails.map((email) => {
					return (
						<li key={email.id} className={email.read ? "email read" : "email unread"}>
							<input type="checkbox" defaultChecked={email.read} />
							<input type="checkbox" className="star-checkbox" defaultChecked={email.starred} />
							<span>{email.sender}</span>
							<span>{email.title}</span>
						</li>
					);
				})}
			</main>
		</div>
	);
}

export default App;
