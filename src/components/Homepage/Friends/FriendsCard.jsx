import React from 'react';
import { Link } from 'react-router-dom';

const FriendsCard = ({ friend }) => {

  const {
    id,
    name,
    picture,
    days_since_contact,
    tags,
    status
  } = friend;

  const relationStatus = {
    "on-track": "bg-[#244d3f] text-white border-green-700",
    "almost due": "bg-yellow-600 text-white border-emerald-700",
    "overdue": "bg-red-500 text-white border-red-700",
  };

  const checkStatus = (status || "dormant").toLowerCase();

  return (
    <div className="card bg-base-100 shadow-sm p-6">
      
      <Link to={`/user/${id}`}>
        
        <figure className="flex justify-center">
          <img
            src={picture}
            alt={name}
            className="rounded-full shadow-md border-2 border-neutral-100 h-20 w-20 object-cover mb-3"
          />
        </figure>

        <div className="flex flex-col gap-2 items-center text-center">

          <h2 className="text-xl font-semibold">{name}</h2>

          <small>{days_since_contact} days ago</small>

          <div className="flex gap-2 flex-wrap justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="uppercase px-3 py-1 rounded-full text-xs text-green-700 font-medium bg-green-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className={`px-4 py-2 rounded-full text-sm font-medium ${relationStatus[checkStatus] || "bg-gray-100 text-gray-700 border border-gray-200"}`}>
            <span className="capitalize">{checkStatus}</span>
          </p>

        </div>

      </Link>

    </div>
  );
};

export default FriendsCard;