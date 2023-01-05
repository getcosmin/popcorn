export default function ButtonExand(eventHandler) {
    return (
        <button className='button-round' onClick={eventHandler}>
            <svg width="48" height="48" viewBox="0 0 48 48">
                <rect x="8" y="23" width="32" height="3" rx="0.4"/>
                <rect className="vertical" x="8" y="23" width="32" height="3" rx="0.4"/>
            </svg>
        </button>
    )
}