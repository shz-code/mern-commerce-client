import { Star, User } from "lucide-react";
import { useEffect, useState } from "react";

const Comment = ({ comment }) => {
  const { rating, user, text, createdAt } = comment;

  const [ratingGot, setRatingGot] = useState([]);
  const [ratingLeft, setRatingLeft] = useState([]);

  useEffect(() => {
    const ratingArr = new Array(rating);
    for (let i = 0; i < rating; i++) {
      ratingArr[i] = (i + 1).toString();
    }
    setRatingGot(ratingArr);
    const ratingLeftArr = new Array(5 - rating);
    for (let i = 0; i < 5 - rating; i++) {
      ratingLeftArr[i] = (i + 1).toString();
    }
    setRatingLeft(ratingLeftArr);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get the current date and time
  const currentDate = new Date();
  // Get the time difference in milliseconds
  const timeDifference = currentDate.getTime() - new Date(createdAt).getTime();
  // Convert the time difference to a readable format
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  // Output the time before the comment was made
  let content = null;
  if (days > 0) {
    content = `${days} days ago`;
  } else if (hours > 0) {
    content = `${hours} hours ago`;
  } else if (minutes > 0) {
    content = `${minutes} minutes ago`;
  } else {
    content = `${seconds} seconds ago`;
  }

  return (
    <div className="flex items-center gap-4">
      <span className="inline-block p-2 rounded-full bg-slate-200 cursor-pointe">
        {user.photo != undefined && user.photo != "none" ? (
          <div className="w-6">
            <img
              src={user.photo}
              className="rounded-full"
              alt="Profile Picture"
            />
          </div>
        ) : (
          <User size={20} />
        )}
      </span>
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <div className="text-sm font-medium">{user.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {content}
          </div>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{text}</p>
        <p className="flex -ms-1">
          {ratingGot.map((arr, index) => (
            <Star key={index} className="fill-yellow-500 stroke-none" />
          ))}
          {ratingLeft.map((arr, index) => (
            <Star key={index} className="fill-slate-200 stroke-none" />
          ))}
        </p>
      </div>
    </div>
  );
};

export default Comment;
