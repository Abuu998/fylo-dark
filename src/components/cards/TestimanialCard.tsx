import { bgQuotes } from "../../assets"

function TestimanialCard(props) {

    return (
        <div
            className={`bg-dark-blue-testim p-4 sm:p-6 rounded-md grid grid-cols-1 grid-rows-subgrid row-span-2 ${props.className}`}
            {...props}
        >
            <p>{props.person.comment}</p>
            <div className="flex items-center gap-3">
                <img 
                    src={props.person.profile} 
                    alt={`${props.person.name} profile picture`} 
                    className="w-9 aspect-square rounded-full block"
                />
                <div className="">
                    <p className="font-bold text-white text-sm">{props.person.name}</p>
                    <small className="text-xs">{props.person.role}</small>
                </div>
            </div>
        </div>
    )
}

export default TestimanialCard