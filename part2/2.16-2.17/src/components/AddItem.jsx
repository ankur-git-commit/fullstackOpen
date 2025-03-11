export default function AddItem({
    addPerson,
    handleName,
    newName,
    newNumber,
    setNewNumber,
}) {
    return (
        <form onSubmit={addPerson}>
            <label htmlFor="name-field">name: </label>
            <input
                type="text"
                name="name-field"
                id="name-field"
                value={newName}
                onChange={handleName}
                autoComplete="off"
                required
            />
            <br />
            <label htmlFor="number-field">number: </label>
            <input
                type="type"
                name="number-field"
                id="number-field"
                value={newNumber}
                onChange={(event) => setNewNumber(event.target.value)}
                autoComplete="off"
                required
            />
            <div>
                <button
                    style={{
                        marginTop: "10px",
                    }}
                >
                    add
                </button>
            </div>
        </form>
    )
}
