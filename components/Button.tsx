import { BsArrowRight } from "react-icons/bs";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <div className="flex cursor-pointer group w-fit active:scale-90 hover:-translate-y-[3px] hover:shadow-xl duration-500 items-center hover:bg-[blue] text-white stroke-1 gap-2 px-5 lg:px-8 bg-black border-2 border-white shadow-md  shadow-gray-200 text-base py-4 lg:py-6">
      <BsArrowRight className="stroke-1 group-hover:translate-x-3 opacity-0 delay-200 group-hover:opacity-100 duration-300 " />
      <p className="group-hover:translate-x-3 duration-300 delay-100">{text}</p>
      <BsArrowRight className="stroke-1 group-hover:translate-x-3 delay-100 group-hover:opacity-0 duration-300 " />
    </div>
  );
}
