"use client"; // Ensure this is at the top

import React from 'react';
import { useRouter } from 'next/navigation';

const DynamicPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const handleClick = () => {
    router.push('/another-page');
  };

  return (
    <div>
      <h1>Dynamic Page ID: {id}</h1>
      <button onClick={handleClick}>Go to Another Page</button>
    </div>
  );
};

export default DynamicPage;



// import React from 'react';

// // Define the component with params as a prop
// const MyDynamicPage: React.FC<{ params: { id: string } }> = ({ params }) => {
  
//   const { id } = params; // Access dynamic segments via params

  
//   return (
//     <div>
//       <h1>Page ID: {params.id}</h1>
//     </div>
//   );
// };

// export default MyDynamicPage;








