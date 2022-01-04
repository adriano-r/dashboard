import "./widgetLarge.css";

export default function WidgetLarge() {
	const Button = ({ type }) => {
		return <button className={"widgetLargeButton " + type}>{type}</button>;
	};

	return (
		<div className="widgetLarge">
			<h3 className="widgetLargeTitle">Latest transctions</h3>
			<table className="widgetLargeTable">
				<tr className="widgetLargeTr">
					<th className="widgetLargeTh">Customer</th>
					<th className="widgetLargeTh">Date</th>
					<th className="widgetLargeTh">Amount</th>
					<th className="widgetLargeTh">Status</th>
				</tr>
				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatici.behindthevoiceactors.com%2Fbehindthevoiceactors%2F_img%2Fchars%2Fcaster-nitocris--4.97.jpg&f=1&nofb=1"
							alt=""
							className="widgetLargeImg"
						/>
						<span className="widgetLargeName">Nitocris</span>
					</td>
					<td className="widgetLargeDate">2 Jan 2022</td>
					<td className="widgetLargeAmount">$222.00</td>
					<td className="widgetLargeStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatici.behindthevoiceactors.com%2Fbehindthevoiceactors%2F_img%2Fchars%2Fcaster-nitocris--4.97.jpg&f=1&nofb=1"
							alt=""
							className="widgetLargeImg"
						/>
						<span className="widgetLargeName">Nitocris</span>
					</td>
					<td className="widgetLargeDate">2 Jan 2022</td>
					<td className="widgetLargeAmount">$222.00</td>
					<td className="widgetLargeStatus">
						<Button type="Declined" />
					</td>
				</tr>
				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatici.behindthevoiceactors.com%2Fbehindthevoiceactors%2F_img%2Fchars%2Fcaster-nitocris--4.97.jpg&f=1&nofb=1"
							alt=""
							className="widgetLargeImg"
						/>
						<span className="widgetLargeName">Nitocris</span>
					</td>
					<td className="widgetLargeDate">2 Jan 2022</td>
					<td className="widgetLargeAmount">$222.00</td>
					<td className="widgetLargeStatus">
						<Button type="Pending" />
					</td>
				</tr>
				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatici.behindthevoiceactors.com%2Fbehindthevoiceactors%2F_img%2Fchars%2Fcaster-nitocris--4.97.jpg&f=1&nofb=1"
							alt=""
							className="widgetLargeImg"
						/>
						<span className="widgetLargeName">Nitocris</span>
					</td>
					<td className="widgetLargeDate">2 Jan 2022</td>
					<td className="widgetLargeAmount">$222.00</td>
					<td className="widgetLargeStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatici.behindthevoiceactors.com%2Fbehindthevoiceactors%2F_img%2Fchars%2Fcaster-nitocris--4.97.jpg&f=1&nofb=1"
							alt=""
							className="widgetLargeImg"
						/>
						<span className="widgetLargeName">Nitocris</span>
					</td>
					<td className="widgetLargeDate">2 Jan 2022</td>
					<td className="widgetLargeAmount">$222.00</td>
					<td className="widgetLargeStatus">
						<Button type="Approved" />
					</td>
				</tr>
				<tr className="widgetLargeTr">
					<td className="widgetLargeUser">
						<img
							src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatici.behindthevoiceactors.com%2Fbehindthevoiceactors%2F_img%2Fchars%2Fcaster-nitocris--4.97.jpg&f=1&nofb=1"
							alt=""
							className="widgetLargeImg"
						/>
						<span className="widgetLargeName">Nitocris</span>
					</td>
					<td className="widgetLargeDate">2 Jan 2022</td>
					<td className="widgetLargeAmount">$222.00</td>
					<td className="widgetLargeStatus">
						<Button type="Approved" />
					</td>
				</tr>
			</table>
		</div>
	);
}
