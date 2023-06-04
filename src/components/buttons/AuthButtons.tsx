'use client';

import { CircularProgress } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/public/logo1.png";
export function SignInButton() {
  const { data: session, status } = useSession();
  console.log(session, status);

  if (status === 'loading') {
    return <>
    <CircularProgress color='warning' size="1rem"/>
    </>;
  }

  if (status === 'authenticated') {
    return (
        <>
              <Link href={`/dashboard`}>
        <Image
          src={session.user?.image ?? Logo}
          width={32}
          height={32}
          alt="Your Name"
          className='rounded-full'
        />
      </Link>
      <SignOutButton />
        </>
    );
  }

  return <button style={{border: "1px solid gray", padding: "5px 15px", borderRadius: "10px"}} className="text-black font-semibold hover:bg-[#a2a7ac44]" onClick={() => signIn()}>Log in</button>;
}

export function SignOutButton() {
  return <button style={{border: "1px solid gray", padding: "5px 15px", borderRadius: "10px"}} className="text-black font-semibold hover:bg-[#a2a7ac44]" onClick={() => signOut()}>Sign out</button>;
}