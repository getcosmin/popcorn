import iconSearch from '../../../assets/icons/icon-search';

export default function ButtonSearch({ openSearchBar }) {
    return (
        <div role="button" className="searchButton button-round" onClick={openSearchBar}>
            {iconSearch}
        </div>
    );
}