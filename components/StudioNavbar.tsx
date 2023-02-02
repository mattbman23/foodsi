import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-start p-5 bg-[#243A59]">
        <ArrowUturnLeftIcon className="w-6 h-6 mr-2 text-[#2c9974]" />
        <Link className="text-[#2c9974] flex-items-center" href="/">
          Back to site
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}
