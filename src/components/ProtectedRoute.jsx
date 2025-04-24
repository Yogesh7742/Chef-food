import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);  // Set loading to false once user state is fetched
    });

    // Cleanup the subscription on component unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching auth state
  }

  if (!user) {
    return <Navigate to="/login" />; // Redirect to login if user is not authenticated
  }

  return children; // If logged in, render the protected content
};

export default ProtectedRoute;
