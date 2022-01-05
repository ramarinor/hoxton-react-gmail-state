import Header from "./components/Header";
import initialEmails from "./data/emails";
import "./App.css";
import { useState } from "react";

function App() {
	// Use initialEmails for state
	// console.log(initialEmails);
	const [emails, setEmails] = useState(initialEmails);

	function toggleRead(targetEmail) {
		const newEmails = emails.map((email) => {
			if (email.id === targetEmail.id) {
				email.read = !email.read;
			}
			return email;
		});
		setEmails(newEmails);
	}
	function toggleStar(targetEmail) {
		const newEmails = emails.map((email) => {
			if (email.id === targetEmail.id) {
				email.starred = !email.starred;
			}
			return email;
		});
		setEmails(newEmails);
	}

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
						<span className="count">{emails.length}</span>
					</li>
					<li
						className="item"
						// onClick={() => {}}
					>
						<span className="label">Starred</span>
						<span className="count">{emails.filter((email) => email.starred).length}</span>
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
							<input type="checkbox" defaultChecked={email.read} onClick={() => toggleRead(email)} />
							{<input type="checkbox" className="star-checkbox" defaultChecked={email.starred} onClick={() => toggleStar(email)} />}
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
