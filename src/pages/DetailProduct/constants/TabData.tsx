import { VariationPopulate } from '../../../common/product';
import { Tab } from '../../../components/TabContent/TabContent';
import Comments from '../../../components/comments/Comments';
export const tabItem: (desc: string, variations: VariationPopulate[]) => Tab[] = (descProduct, variations) => [
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
            <thead>
               <th className='font-bold text-gray-600 text-start p-3 border-[1px] border-gray-200 uppercase'>Weight</th>
               <th className='font-bold text-gray-600 text-start p-3 border-[1px] border-gray-200 uppercase'>Vendor</th>
               <th className='font-bold text-gray-600 text-start p-3 border-[1px] border-gray-200 uppercase'>Stock</th>
            </thead>
            {variations?.map((item, index) => (
               <tr key={index}>
                  <th className='text-grayLight200 text-start p-3 border-[1px] border-gray-200'>{`${item.weight}.kg`}</th>
                  <th className='text-grayLight200 text-start p-3 border-[1px] border-gray-200'>{`${item.vendorId.name} & ${item.vendorId.origin}`}</th>
                  <th className='text-grayLight200 text-start p-3 border-[1px] border-gray-200'>{`${item.quantity} products`}</th>
               </tr>
            ))}
         </table>
      ),
      type: 'addition'
   },
   {
      label: 'Review',
      content: (
         <div>
            <Comments></Comments>
         </div>
      ),
      type: 'review'
   }
];
