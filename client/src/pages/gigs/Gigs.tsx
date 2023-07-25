import React , {useState} from 'react'
import Buttons from '../../components/Buttons'

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
    <div>
        <div className="container mx-auto flex flex-col gap-5">
            <div>finesse & Mobile Apps</div>
            <div className='font-500 text-[40px]'>Mobile Engineers</div>
            <div className=''>Explore and build the best apps</div>
             <div className='flex items-start justify-between overflow-hidden '>
             <div className='flex items-center gap-3 '>Budget
            <input className="p-2 h-[30px] border-[2px] w-[20%]" placeholder=" min" />
            <input className="p-2 h-[30px] border-[2px] w-[20%]" placeholder=" max" />
            <Buttons title="Apply"/>
             </div>

             <div className='flex items-start gap-3'>
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
                }</div> 
               
             </div>
             </div>
        </div>
    </div>
  )
}

export default Gigs