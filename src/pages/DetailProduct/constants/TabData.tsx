import { Tab } from '../../../components/TabContent/TabContent';

export const tabItem: (desc: string) => Tab[] = (descProduct: string) => [
   {
      label: 'Description',
      content:
         descProduct +
         '. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequatur praesentium aut neque suscipit ex fugit commodi velit, reprehenderit deserunt optio officia repellendus animi vitae dignissimos. Quam corrupti est quas!',
      type: 'desc'
   },
   {
      label: 'Additional Info',
      content: (
         <table border={10} className='w-[50%] text-start'>
            <tr>
               <th className='font-bold text-gray-600 text-start p-3 border-[1px] border-gray-200'>Vendor</th>
               <th className='text-grayLight200 text-start p-3 border-[1px] border-gray-200'>Freezy</th>
            </tr>
            <tr>
               <th className='font-bold text-gray-600 text-start p-3 border-[1px] border-gray-200'>Weight</th>
               <th className='text-grayLight200 text-start p-3 border-[1px] border-gray-200'>1.kg</th>
            </tr>
         </table>
      ),
      type: 'addition'
   },
   {
      label: 'Review',
      content: <div>Review </div>,
      type: 'review'
   }
];
