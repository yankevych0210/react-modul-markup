function Form() {
    return (
        <div className="form">
            <h2>Хотите веб-сайт?</h2>
            <p>
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                является стандартной "рыбой" для текстов на латинице с начала XVI века.
            </p>
            <div className="fields">
                <input placeholder="Ваше имя" className="name" />
                <input placeholder="Ваш e-mail" className="e-mail" />
            </div>
            <textarea placeholder="Сообщение" className="message"></textarea>
            <button className="btn">ОТПРАВИТЬ</button>
        </div>
    )
}
export default Form