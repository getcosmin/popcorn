export default function WrapperSection({ children, classList }) {
    return (
        <section className={classList}>
            <div className="wrapper">
                {children}
            </div>
        </section>
    );
}
