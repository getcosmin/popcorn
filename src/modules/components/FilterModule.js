import iconSort from "../images/icon-sort"
import iconFilter from "../images/icon-filter"

export default function FilterModule() {
    return(

        <div className='filter'>
            <button className='button-sort'>
                <svg className='button-icon' width='32' height='32'>
                    {iconSort}
                </svg>
            </button>
            <button className='button-filter'>
                <svg className='button-icon' width='32' height='32'>
                    {iconFilter}
                </svg>
            </button>
        </div>
        
    )
}