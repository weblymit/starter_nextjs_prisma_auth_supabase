import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "./utils/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<div className='p-10'>
			<p>This a public route</p>

			{session ? (
				<div className=''>
					<p>
						You are logged in as <strong>{session.user?.email}</strong>
					</p>
					<LogoutButton />
				</div>
			) : (
				<p>You are not logged in</p>
			)}
		</div>
	);
}
