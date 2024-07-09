import { Heart } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { getUserLikeTotalCount } from "../util/get-user-like-total-count";
import { writeUserLikeTotalCount } from "../util/write-user-like-total-count";

const MAX_NUMBER_OF_LIKE_PER_IMG = 5;
const MAX_NUMBER_OF_LIKE_TOTAL = 2;

export const LikeButton = ({
  initialLikeNumber,
  projectId,
}: {
  initialLikeNumber: number;
  projectId: number;
}) => {
  const [likeNumber, setLikeNumber] = useState(initialLikeNumber);
  const [size, setSize] = useState(13);
  const [opacity, setOpacity] = useState(0.3);
  const [likeUsed, setLikedUsed] = useState(0); // Only a few likes per img allowed.

  const userLikeTotalCount = getUserLikeTotalCount();

  const addLike: MouseEventHandler<HTMLDivElement> = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (
      likeUsed > MAX_NUMBER_OF_LIKE_PER_IMG - 1 ||
      userLikeTotalCount > MAX_NUMBER_OF_LIKE_TOTAL
    ) {
      return;
    }

    setLikeNumber(likeNumber + 1);
    setSize(size + 2);
    setOpacity(opacity + 0.2);
    setLikedUsed(likeUsed + 1);
    writeUserLikeTotalCount(userLikeTotalCount + 1);

    try {
      const response = await fetch("/api/add-like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId, likeNumber }),
      });

      if (response.ok) {
        return;
      } else {
        console.error("Failed to add like");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      onClick={addLike}
      className="flex items-center gap-2 text-white opacity-70 hover:opacity-100 border border-solid border-transparent hover:border-white/20 p-2 rounded-md"
    >
      {likeNumber}
      <div className="w-8 h-8 flex justify-center items-center">
        <Heart size={size} fill={"red"} stroke="red" opacity={opacity} />
      </div>
    </div>
  );
};
