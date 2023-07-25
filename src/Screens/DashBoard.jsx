import React, { useEffect } from 'react';
import { useAuth } from './GlobalContext';

export default function Dashboard() {
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://devassetapi.remotestate.com/asset-management/user/dashboard', {
          method: 'GET',
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log(data.totalAssets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      {/* Your Dashboard content */}
    </div>
  );
}
