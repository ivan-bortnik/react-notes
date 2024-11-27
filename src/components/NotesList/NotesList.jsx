import Note from "../Note/Note"

function NotesList() {
    let notes = [
        {
            title: "Note 1",
            text: "This is the first note",
            date: new Date("2018-09-22T15:52:00"),
            tags: ["work"],
        },
        {
            title: "Note 2",
            text: "This is the second note",
            date: new Date("2019-05-22T08:12:00"),
            tags: ["work", "home"],
        },
    ]

    return <>
        <div className="flex p-4 gap-4 flex-wrap justify-center items-start">
            {notes.map((note, i) => <Note title={note.title} text={note.text} date={note.date} tags={note.tags} />)}
        </div>
    </>
}

export default NotesList;