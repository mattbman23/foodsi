"use client";

import Link from "next/link";

import { PostCard } from "./PostCard";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div className="relative z-0">
      <hr className="mb-10 border-secondary" />
      <div className="grid grid-cols-1 gap-10 px-10 pb-24 md:grid-cols-2 gap-y-16">
        {posts.map((item) => (
          <>
            <Link href={`/post/${item.slug.current}`} key={item._id}>
              <PostCard post={item} />
            </Link>
          </>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="relative px-2 py-3 overflow-hidden text-sm bg-white rounded-lg group md:text-base"
        >
          <div className="absolute inset-0 w-3  bg-secondary  transition-all duration-[350ms] ease-out group-hover:w-full" />
          <span className="relative text-black group-hover:text-white ">
            Donate...
          </span>
        </button>
      </div>
    </div>
  );
}
