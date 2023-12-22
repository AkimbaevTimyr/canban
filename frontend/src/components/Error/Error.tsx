import './style.scss';

const Error = ({message} : any) => {
    
    return (
        <div className="frame">
            <div className="modal">
                <img src="https://100dayscss.com/codepen/alert.png" width="44" height="38" />
                <span className="title">Oh snap!</span>
                <p>{message}</p>
                <div className="button">Dismiss</div>
            </div>
        </div>
    )

}

export default Error;

