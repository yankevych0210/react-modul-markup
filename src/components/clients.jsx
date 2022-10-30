const clientsImg = []

function Clients() {
    return (
        <div className="clients">
            {[...Array(4)].map((_, id) => <div key={id}><img src="./img/Rectangle-9.png" alt="Microsoft" /></div>)}
        </div>
    )
}
export default Clients