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






//  function HomePage() {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <p>This is the main landing page of the application.</p>
//     </div>
//   );
// }

// export default HomePage;


