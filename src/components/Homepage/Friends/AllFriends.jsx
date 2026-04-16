import React, { useEffect, useState } from 'react';
import FriendsCard from './FriendsCard'

const AllFriends = () => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/data/friendsData.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
            
            {/* Animated Ring */}
            <span className="loading loading-ring loading-lg text-primary"></span>

            {/* App Name */}
            <h2 className="text-xl font-semibold tracking-wide">
                KeenKeeper
            </h2>

            {/* Subtext */}
            <p className="text-sm text-gray-500 animate-pulse">
                Loading your friends...
            </p>

        </div>
        );
    }


    return (
        <div className="container mx-auto px-4 pt-24 mb-10">
            <h2 className="text-2xl font-bold mb-6">
                Your Friends
            </h2>

            <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    friends.map((friend) => (
                        <FriendsCard key={friend.id} friend={friend} />
                    ))
                 }
            </section>

        </div>
    );
};

export default AllFriends;