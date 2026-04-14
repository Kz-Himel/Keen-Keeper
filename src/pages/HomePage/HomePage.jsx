import React from 'react';
import Banner from '../../components/Homepage/Banner/Banner';
import StatsCard from '../../components/Homepage/StatsCard/StatsCard';
import AllFriends from '../../components/Homepage/Friends/AllFriends';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <StatsCard />
            <AllFriends />
        </div>
    );
};

export default HomePage;