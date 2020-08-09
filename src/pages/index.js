import React from "react";
import {Link} from "gatsby";
import Logo from "../components/logo.js"

export default () =>
	<div>
		<Logo />
		<div className={"row"}>
			<div className={"col home_link"}>
				<Link to="/projects">
					<img 
						src={require("../images/projects.png")} 
						width={"300px"}
					/>
				</Link>
			</div>
			<div className={"col home_link"}>
				<Link to="/blog">
					<img 
						src={require("../images/blog.png")} 
						width={"200px"}
					/>
				</Link>
			</div>
			<div className={"col home_link"}>
				<Link to="/connect">
					<img 
						src={require("../images/connect.png")} 
						width={"300px"}
					/>
				</Link>
			</div>
		</div>
	</div>
