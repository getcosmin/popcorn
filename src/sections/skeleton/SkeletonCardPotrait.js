// 01 - Components
import LogoPopcornPlaceholder from '../images/logo-popcorn-placeholder';

export default function SkeletonCardPotrait() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-image-placeholder placeholder-body">
                     <LogoPopcornPlaceholder />
               </div>
            </div>
        </div>
    );
}
