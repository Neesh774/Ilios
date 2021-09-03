import { RiGroupFill, RiCodeSSlashLine } from 'react-icons/ri'
const Skills = (props) => {
    const val = props.value;
    const max = props.max;
    const text = props.text;
    const type = props.type;
    return (
        <div className="mx-auto text-lg md:space-x-4 space-y-4 md:space-y-0 py-2">
            <div className="flex justify-center align-middle text-center space-x-2">
                {type === 'social' ? <RiGroupFill className="h-6 w-6" /> : <RiCodeSSlashLine className="h-6 w-6" />}
                <div className="text-gray-800 text-center mb-2 text-xl">{text}</div>
            </div>
            <div className="flex space-x-2 mx-auto justify-center">
                {
                    [...Array(max)].map((x, i) => (
                        <div key={i} className="justify-center">
                            <div className={(i < val)? "bg-gray-500 w-7 h-4" : "bg-gray-400 w-7 h-4"}></div>
                        </div>  
                    ))  
                }
            </div>
        </div>
    )
}

export default Skills