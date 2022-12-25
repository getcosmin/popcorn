export default function BottomNavigation() {
    return(
        <div className='bottom-navigation'>
            <div className='navigation-button'>
                <svg className='navigation-icon' width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 
                        16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                </svg>
                <span className='navigation-text'>Feed</span>
            </div>
            <div className='navigation-button'>
                <svg className='navigation-icon' width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 
                        16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                </svg>
                <span className='navigation-text'>All Shows</span>
            </div>
        </div>
    )
}