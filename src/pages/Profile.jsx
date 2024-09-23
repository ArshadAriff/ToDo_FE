import React, { useContext } from "react";
import { Context } from "../main";
import Loader from "../components/Loader";

const Profile = () => {
  const { isAuthenticated, loading, user } = useContext(Context);
 if (!isAuthenticated) return <Navigate to={"/login"} />;
    if (!user) {
    return <div>No user data available.</div>; // Handle case where user data is empty
  }

  return loading ? (
    <Loader />
  ) :(
    <div>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Profile;
// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../main";
// import Loader from "../components/Loader";
// import { Navigate } from "react-router-dom"; // Ensure this is imported

// const Profile = () => {
//   const { isAuthenticated, loading, user: contextUser } = useContext(Context);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (contextUser) {
//       setUser(contextUser);
//     }
//   }, [contextUser]);

//   if (loading) {
//     return <Loader />;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   if (!user) {
//     return <div>No user data available.</div>;
//   }

//   return (
//     <div>
//       <h1>{user.name}</h1>
//       <p>{user.email}</p>
//     </div>
//   );
// };

// export default Profile;
