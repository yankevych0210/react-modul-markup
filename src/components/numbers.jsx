const numbersImg = []

function Numbers() {
    return (
        <div className="numbers">
            {[...Array(6)].map((_, id) => <div key={id} className="numbers-item"><img src="./img/numbers__item.png" alt="numbers" /></div>)}
        </div>
    )
}
export default Numbers