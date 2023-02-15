import iconSearch from '../../assets/icons/icon-search';

export default function ButtonSearch({ openSearchBar }) {
    return (
        <button className="searchButton button-round" onClick={openSearchBar}>
            {iconSearch}
        </button>
    );
}