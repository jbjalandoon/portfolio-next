import { IconType } from "react-icons";

export default function Stack({ Svg, name }: { Svg: IconType; name: string }) {
  return (
    <div className='flex flex-col items-center justify-center gap-1'>
      <span className='text-4xl text-gray-500'>
        <Svg />
      </span>
      <span className='text-md tracking-wider font-extralight'>{name}</span>
    </div>
  );
}
