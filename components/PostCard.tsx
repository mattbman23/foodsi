import Image from "next/image";

import urlFor from "../lib/urlFor";

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <div className="flex flex-col cursor-pointer group">
      <div className="relative w-full transition-transform duration-200 ease-out h-80 drop-shadow-xl group-hover:scale-105">
        <Image
          className="object-cover object-left rounded-lg lg:object-center"
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
        />
      </div>
      <div className="flex-1 mt-5">
        <p className="text-lg font-bold underline text-primary">{post.title}</p>
        <p className="line-clamp-2 text-secondary">{post.description}</p>
      </div>
    </div>
  );
};
