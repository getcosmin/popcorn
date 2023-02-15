export default function HeadlineSmall({ title, moviesGenre }) {
    return (
        <header className="wrapper line">
            <h2>{title}</h2>
            { moviesGenre
                ? <h2 className="title-genre"> / All {moviesGenre} </h2>
                : null }
        </header>
    );
}
