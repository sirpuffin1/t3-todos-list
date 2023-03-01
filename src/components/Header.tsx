import { signIn,signOut, useSession } from "next-auth/react";

const Header = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1 pl-5 text-3xl font-bold">
                {sessionData?.user?.name ? `Notes for ${sessionData.user.name}` : ""}
            </div>
        </div>
    );
}

export default Header;