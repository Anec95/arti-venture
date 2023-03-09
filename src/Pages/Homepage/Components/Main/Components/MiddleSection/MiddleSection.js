export default function MiddleSection() {
    return (
        <div className="middle-container">                               
            <div className="association-container">
                <h1 className="association-name">Arti Venture</h1>
                <h3 className="association-slogan">Una libera ricerca olistica</h3>
                <div className="quotes-container">
                    <h6 className="quotes">Il mio occhio viene da un altro universo.</h6>
                    <h6 className="quotes">Un mondo da questo lato, uno dall'altro, io siedo sulla soglia.</h6>
                    <h5 className="author">--Rumi</h5>
                </div> 
            </div>
            <div className="animate__animated animate__bounce scroll-down-container">
                <p className="scroll">Scroll Down</p>
                <span className="material-icons-outlined arrow-down-icon">
                    keyboard_arrow_down
                </span>
            </div> 
        </div>
    )
}