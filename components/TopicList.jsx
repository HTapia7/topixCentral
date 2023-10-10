import DeleteButton from './DeleteButton'
import { HiPencilAlt} from 'react-icons/hi'
import Link from 'next/link'

export default function TopicList() {
  return(
   <>
    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5
     items-start'>
      <div>
        <h2 className='font-bold text-2xl'>Topix Title</h2>
        <div>Topix Desciption</div>
      </div>
      <div className='flex gap-2 '>
          <DeleteButton/>
          <Link href={'/edit-Topic/123'}>
            <HiPencilAlt size={24}/>
          </Link>
      </div>
    </div>
   </>
  )
}