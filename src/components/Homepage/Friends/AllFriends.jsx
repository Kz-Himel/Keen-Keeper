import React, { use } from 'react';
import FriendsCard from './FriendsCard'

const friendsPromise = async () => {
    const res = await fetch('friendsData.json');
    const data = await res.json();
}

const AllFriends = () => {

    const friends = use(friendsPromise);

    return (
        <div>
            <h2>Your Friends</h2>

            <section>
                {
                    friends.map((friend, id) => (
                        <FriendsCard key={id} friend={friend}/>
                    ))
                }
            </section>
        </div>
    );
};

export default AllFriends;