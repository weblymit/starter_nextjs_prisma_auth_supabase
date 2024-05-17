"use client";

import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

export default function SignInForm() {
	const router = useRouter();
	const [email, setEmail] = React.useState<string | null>(null);

	async function SignInWithEmail() {
		const signInResult = await signIn("email", {
			email: email,
			callbackUrl: `${window.location.origin}`,
			redirect: false,
		});

		if (signInResult?.error) {
			console.error("Error signing in", signInResult?.error);
			toast({
				title: "Erreur de connexion",
				description: "Veuillez vérifier votre email et réessayer",
				variant: "destructive",
			});
		} else {
			toast({
				title: "Un email a été envoyé",
				description: "On vous a envoyé un email pour vous connecter",
			});
			// setEmail(null);
			// router.refresh();
		}
	}

	return (
		<form action={SignInWithEmail}>
			<Label>Email</Label>
			<Input
				onChange={(e) => setEmail(e.target.value)}
				name='email'
				type='email'
				placeholder='name@exemple.com'
			/>
			<Button type='submit' className='w-full my-5'>
				Se connecter avec Email
			</Button>
		</form>
	);
}
