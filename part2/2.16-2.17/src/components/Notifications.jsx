import styles from "./Notifications.module.css"

export default function Notifications({
    displayName,
    displayNumber,
    deleteFlag,
}) {
    const wrapperClass = deleteFlag
        ? styles.wrapperDeletePerson
        : styles.wrapperAddPerson

    const message = deleteFlag
        ? `${displayName} with ${displayNumber} has been Deleted!`
        : `${displayName} with ${displayNumber} has been added to the phonebook`

    return (
        <div className={wrapperClass}>
            <p> {message}</p>
        </div>
    )
}
