import iconSearch from "../../images/icon-search"

export default function ButtonSearch({openSearchBar}) {
    return(
        <button className='searchButton button-round' onClick={openSearchBar}>
            {iconSearch}
        </button>
    )
}