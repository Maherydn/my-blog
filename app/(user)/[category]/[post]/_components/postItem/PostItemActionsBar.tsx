"use client";

import { CommentIcon, LikeIcon, ShareIcon } from "../../_assets/icon";
import { PostItemAction } from "./PostItemAction";

type PostItemActionBarProps = {
  likeCount: number;
  commentCount: number;
  shareCount: number;
  isLiked: boolean;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
};

export const PostItemActionBar = ({
  likeCount,
  commentCount,
  shareCount,
  isLiked,
  onLike,
  onComment,
  onShare,
}: PostItemActionBarProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <hr className="w-full border-slate-400/40" />
      <div className="flex gap-4 px-4 items-center">
        <PostItemAction
          icon={LikeIcon}
          count={likeCount}
          isLiked={isLiked}
          onClick={onLike}
        />
        <PostItemAction
          icon={CommentIcon}
          count={commentCount}
          isLiked={false}
          onClick={onComment}
        />
        <PostItemAction
          icon={ShareIcon}
          count={shareCount}
          isLiked={false}
          onClick={onShare}
        />
      </div>
      <hr className="w-full border-slate-400/40" />
    </div>
  );
};
