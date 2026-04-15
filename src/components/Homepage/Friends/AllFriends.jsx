import React, { use } from 'react';
import FriendsCard from './FriendsCard'

const friendsPromise = fetch('/data/friendsData.json')
  .then(res => res.json());

const AllFriends = () => {

    const friends = use(friendsPromise);

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