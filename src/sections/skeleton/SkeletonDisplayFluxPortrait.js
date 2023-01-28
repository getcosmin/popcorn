// 01 - Components
import { useEffect, useState } from 'react';
import SkeletonCardPotrait from './SkeletonCardPotrait';

export default function SkeletonDisplayFluxPortrait() {
    const [cardsNumber, setCardsNumber] = useState();
    const [isSkeletonCardEnabled, setSkeletonCardEnabled] = useState(false);

    useEffect(() => {
        const cards = [];
        for (let i = 0; i < 40; i++) {
            cards.push(i);
        }
        setCardsNumber(cards);
        setSkeletonCardEnabled(true);
    }, []);

    return (
        <section>
            <div className='wrapper'>
                <div className='flux-movies'>
                    {isSkeletonCardEnabled && cardsNumber.map((card) => {
                        return <SkeletonCardPotrait key={card.id} />;
                    })}
                </div>
            </div>
        </section>
    );
}
