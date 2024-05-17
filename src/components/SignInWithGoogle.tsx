"use client";

import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export default function SignInWithGoogle() {
	return (
		<Button
			onClick={() =>
				signIn("google", {
					callbackUrl: `${window.location.origin}`,
				})
			}
			className='w-full'
			variant='secondary'
		>
			Se connecter avec
			<FcGoogle className='text-2xl ml-2' />
		</Button>
	);
}
