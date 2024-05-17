import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SignInWithGoogle from "@/components/SignInWithGoogle";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "@/components/SignInForm";

export default async function page() {
	const session = await getServerSession(authOptions);

	if (session) {
		return redirect("/"); // Redirect to the home page if the user is already logged in
	}
	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			<Card>
				<CardHeader>
					<CardTitle>Connecte toi</CardTitle>
					<CardDescription>
						Il faut que tu te connecete pour acceder a cette page
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className=''>
						<SignInForm />
						<SignInWithGoogle />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
