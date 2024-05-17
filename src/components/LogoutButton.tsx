"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogoutButton() {
	return (
		<Button
			onClick={() =>
				signOut({
					callbackUrl: `${window.location.origin}/auth`,
				})
			}
		>
			Se déconnecter
		</Button>
	);
}
