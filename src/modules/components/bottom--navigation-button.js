export default function BottomNavigationButton(icon) {
    return (
        <div className='navigation-button'>
            <svg className='navigation-icon' width="24" height="24" viewBox="0 0 32 32">
                {icon.src}
            </svg>
        <span className='navigation-text'>{icon.name}</span>
    </div>
    )
}