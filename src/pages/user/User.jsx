import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src=" https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F25%2F6d%2F4a%2F256d4a2cf55dbfe96ed18b032fe12a8a.jpg&f=1&nofb=1"
							alt=""
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUsername">Ana Beck</span>
							<span className="userShowUserTitle">
								Software Engineer
							</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon" />
							<span className="userShowInfoTitle">
								annabeck99
							</span>
						</div>
						<div className="userShowInfo">
							<CalendarToday className="userShowIcon" />
							<span className="userShowInfoTitle">
								12.10.1980
							</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="userShowInfo">
							<PhoneAndroid className="userShowIcon" />
							<span className="userShowInfoTitle">
								+1 123 321 33
							</span>
						</div>
						<div className="userShowInfo">
							<MailOutline className="userShowIcon" />
							<span className="userShowInfoTitle">
								annabeck99@gmail.com
							</span>
						</div>
						<div className="userShowInfo">
							<LocationSearching className="userShowIcon" />
							<span className="userShowInfoTitle">
								New York | USA
							</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input
									type="text"
									placeholder="annabeck99"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Full Name</label>
								<input
									type="text"
									placeholder="Ana Beck"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input
									type="text"
									placeholder="annabeck99@gmail.com"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input
									type="text"
									placeholder="+1 123 321 33"
									className="userUpdateInput"
								/>
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input
									type="text"
									placeholder="New York | USA"
									className="userUpdateInput"
								/>
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									className="userUpdateImg"
									src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F25%2F6d%2F4a%2F256d4a2cf55dbfe96ed18b032fe12a8a.jpg&f=1&nofb=1"
									alt=""
								/>
								<label htmlFor="file">
									<Publish className="userUpdateIcon" />
								</label>
								<input
									type="file"
									id="file"
									style={{ display: "none" }}
								/>
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
