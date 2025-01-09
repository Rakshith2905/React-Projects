import React from 'react';
import { Link } from 'react-router-dom';
import {
    SignedOut,
    SignInButton,
    SignedIn,
    UserButton,
} from '@clerk/clerk-react';
import { Button } from './ui/button.jsx';

function Header() {
    return (
        <>
            <nav className="py-4 flex justify-between items-center">
                <Link>
                    <img src="/Jobworth_logo.svg" alt="Main logo" />
                </Link>
                <Button variant="outline">Login</Button>
                {/* <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn> */}
            </nav>
        </>
    );
}

export default Header;
