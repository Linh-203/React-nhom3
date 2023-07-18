
export type DropdownChild = {
   label: string;
   handleGetValue: () => void;
};
type Props = {
   isOpen: boolean;
   childs: DropdownChild[];
   className?: string;
};

const DropDown = ({ className, childs, isOpen }: Props) => {
   if (!isOpen) return null;
   return (
      <div
         className={`absolute top-5 shadow-md left-0 ${className!} flex flex-col justify-start items-center max-h-[300px] overflow-auto py-3 rounded-lg z-[100] bg-white min-w-[200px]`}
      >
         {childs.map((item, index) => (
            <div className='p-2 cursor-pointer hover:bg-primaryBg w-full' key={index} onClick={item.handleGetValue}>
               {item.label}
            </div>
         ))}
      </div>
   );
};

export default DropDown;
