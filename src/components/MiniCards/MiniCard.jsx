// for css
import './miniCards.css'

export default function MiniCards({content}) {

   return(
     <div className="miniCards-wrapper flex">
        {content.map((item) => {
            return(
                <div key={item.id} className="minicard-content flex">
                    <h4>
                        {item.number}
                    </h4>
                    <p>
                        {item.text}
                    </p>
                </div>
            )
        })}
      </div>
   )
}