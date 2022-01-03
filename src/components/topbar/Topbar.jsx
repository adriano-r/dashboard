import "./topbar.css";
import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons/";

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Administrador</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
					<img
						src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-ns82LUbbsOc%2FWVmCqC6Y7mI%2FAAAAAAAAHBI%2FVbmuyYpzALwju9reO0RvNTEObxREd2kTgCLcBGAs%2Fs1600%2FNitocris.jpg&f=1&nofb=1"
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
}
