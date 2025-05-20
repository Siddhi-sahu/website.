import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"

export const Main = () => {

    return <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center  ">
            <Section1 />

        </div>
        <div className="flex items-center justify-center">

            <Section2 />
        </div>
        <div className="flex items-center justify-center">
            <Section3 />
        </div>


    </div>
}