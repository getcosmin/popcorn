import LogoPopcornPlaceholder from '../../assets/icons/logo-popcorn-placeholder';

export default function MoviePlaceholderPortrait() {
    return (
        <div className="card-image-placeholder placeholder-body">
            <div>
                <LogoPopcornPlaceholder />
                <p className="placeholder-text">IMG NOT FOUND</p>
            </div>
        </div>
    );
}