function getTag(tag) {
    let availableTags = {
        work:
            {
                label: "Work",
                color: "blue-800",   
            },
        home:
            {
                label: "Home",
                color: "green-800",  
            },
    }

    return <div className={`rounded-full px-3 py-1 bg-${availableTags[tag].color}`}>{availableTags[tag].label}</div>
}

function Note(props) {
    return <>
        <div className="shadow rounded-2xl p-4 w-96 h-64 flex flex-col">
            <div className="flex text-white gap-1">
                {props.tags.map((tag, i) => getTag(tag))}
            </div>
            <h2 className="font-bold my-2">{props.title}</h2>
            <p>{props.text}</p>
            <p className="text-sm text-gray-700 self-end mt-auto">{props.date.toLocaleDateString()}</p>
        </div>
    </>
}

export default Note;