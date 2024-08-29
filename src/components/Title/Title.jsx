import './Title.css'

export default function Title(props) {
    return(
        <div className="section-header">
            <h3 className="sub-title">
                {props.sub_title}
            </h3>
            <p className="title">
                {props.title}
            </p>
        </div>
    )
}