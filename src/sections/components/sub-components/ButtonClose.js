export default function ButtonClosePage({ closeFunction }) {
    return (
        <div className="close-ui">
            <div role="button" className='button-round' onClick={closeFunction}>
                <svg className="button-round-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13.4,12l4.1-4.1c0.1-0.1,0.1-0.2,0-0.3l-1.1-1.1c-0.1-0.1-0.2-0.1-0.3,0L12,10.6L7.9,6.5c-0.1-0.1-0.2-0.1-0.3,0L6.5,7.6
                           c-0.1,0.1-0.1,0.2,0,0.3l4.1,4.1l-4.1,4.1c-0.1,0.1-0.1,0.2,0,0.3l1.1,1.1c0.1,0.1,0.2,0.1,0.3,0l4.1-4.1l4.1,4.1
                           c0.1,0.1,0.2,0.1,0.3,0l1.1-1.1c0.1-0.1,0.1-0.2,0-0.3L13.4,12z">
                    </path>
                </svg>
            </div>
        </div>
    );
}