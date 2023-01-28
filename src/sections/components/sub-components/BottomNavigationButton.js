export default function BottomNavigationButton({ button }) {
    return (
        <div role="button" className="navigation-button">
            <svg className="navigation-icon" data-active={button.isEnabled} width="24" height="24" viewBox="0 0 32 32">
                {button.icon}
            </svg>
            <span className="navigation-text">{button.title}</span>
        </div>
    );
}
