import { Link } from "react-router-dom";

interface detailedTaskInterface {
    id: string
    title: string
    badges?: {name: string, checked: boolean}[]
    comment?: string
    time: number
}

function DetailViewFinishedTaskComponent (props: { detailedTask: detailedTaskInterface }) {
    return (
        <div>
            This is a finished Task
            <br />
            {props.detailedTask.title}
            <br />
            {props.detailedTask?.badges?.map(e => e.name)}
            <br />
            <Link to="/">back home</Link>
        </div>
    )
}

export default DetailViewFinishedTaskComponent;