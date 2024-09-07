import React from 'react';
import Link from 'next/link';


function Home() {
  return (
    <>
    <h1>hello world</h1>
    <Link href="/dashboard">Go to dashboard</Link><br></br>
    <Link href="/users">Go to users</Link>
    
    
    </>
  );
}

export default Home;








