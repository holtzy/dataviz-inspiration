import { Heart } from "lucide-react";
import { MouseEventHandler, useState } from "react";

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

  const addLike: MouseEventHandler<HTMLDivElement> = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setLikeNumber(likeNumber + 1);
    setSize(size + 2);
    setOpacity(opacity + 0.2);

    try {
      const response = await fetch("/api/add-like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId, likeNumber }),
      });

      if (response.ok) {
        console.log("link with DB worked!");
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
        <Heart size={size} fill={"white"} opacity={opacity} />
      </div>
    </div>
  );
};
