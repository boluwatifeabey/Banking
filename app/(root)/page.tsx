'use client'

import { useState, useEffect } from 'react';
import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getLoggedInUser();
      setLoggedIn(user); 
    };
    fetchUser();
  }, []);

  const userName = loggedIn?.name || 'Guest';

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={userName} 
            subtext="Access and manage your Account and transactions efficiently."
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}  // Pass the entire user object to the sidebar
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 123.60 }]}
      />
    </section>
  );
}

export default Home;
