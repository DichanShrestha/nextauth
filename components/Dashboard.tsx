"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
	const { data: session } = useSession();

	return (
		<>
			{session ? (
				<>
					<h1>welcome</h1>
				</>
			) : (
				<>
					<h1>You are not logged in</h1>
					<button
						className="text-5 border rounded  "
						onClick={() => signIn("google")}
					>
						Sign in with google
					</button>
					<button
						className="text-5 border rounded my-3"
						onClick={() => signIn("google")}
					>
						Sign in with Github
					</button>
				</>
			)}
		</>
	);
};

export default Dashboard;
