import { PureComponent } from "react"

function CareScale({ scaleValue, careType }) {
    const quantityLabel = {
        1 : 'peu', 
        2 : 'modérement', 
        3 : 'beaucoup'
    }
    const range = [1, 2, 3]
    const scaleType =
            careType === 'light' ? (
                <div>☀️</div>
            ) : (
                <div>💧</div>
            )
    return (

        <div

            onClick= {() => 
                alert(
                    `Cette plante requiert ${quantityLabel[scaleValue]} ${
                        careType === 'light' ? 'de lumière' : 'd arrosage'
                    }`
                )
            }
        >



      

            {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? (
                        <span key={rangeElem.toString()}>{scaleType}</span>
                    ) : null
            )  
            }
        </div>
        
    )
 
}



export default CareScale