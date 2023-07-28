import React , {useState} from 'react'
import Buttons from '../../components/Buttons'
import { gigs } from '../../data';
import GigCard from "../../components/gigCard/GigCard.tsx"


const Gigs = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false);
    console.log(open);
    const [sort, setSort] = useState<String>("sales")

    const reSort = (type: String) => {
      setSort(type)
      setOpen(false)
    }
  return (
            
    <div className=''>
        <div className="container mx-auto flex flex-col gap-5 ">
            <div>finesse & Mobile Apps</div>
            <div className='font-500 text-[40px]'>Mobile Engineers</div>
            <div className=''>Explore and build the best apps</div>
             <div className='flex items-start justify-between py-5 '>
             <div className='flex items-center gap-3 '>
             <div>Budget</div>
            <input className="p-2 h-[30px] border-[2px] w-[20%]" placeholder=" min" />
            <input className="p-2 h-[30px] border-[2px] w-[20%]" placeholder=" max" />
            <Buttons title="Apply"/>
             </div>

             <div className='flex items-start gap-3 justify-end  w-full overflow-hidden'>
                 <div className='mt-3'>Filter by</div>
                <div ><Buttons title={sort === "sales" ? "Top Selling": "Newest"} onClick={() =>setOpen(!open)}/>
                {
                    open && (
                        <>
                        <div className='flex flex-col overflow-hidden border-[1px] gap-3 p-2 cursor-pointer' >
                            {
                                sort === "sales" ? (
                                    <div onClick={() =>reSort("createdAt")}>Newest</div>
                                ): (
                                    <div onClick={() =>reSort("sales")}>Top Selling</div>
                                )
                            }
                         

                        </div>
                        </>
                    )
                }
                </div> 
             </div>
              <div>
                
              </div>
              
             </div>
             
             <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
             {
                    gigs.map(gig => (
                        <GigCard key={gig.id} item={gig}/>
                    ))
                 }
             </div>
        </div>
    </div>
  )
}

export default Gigs