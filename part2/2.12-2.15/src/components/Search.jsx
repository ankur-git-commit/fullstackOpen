export default function Search({ searchTerm, handleSearch }) {
    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="search-field">Filter show with </label>
                <input
                    type="text"
                    name="search-field"
                    id="search-field"
                    value={searchTerm}
                    onChange={handleSearch}
                    autoComplete="off"
                />
            </form>
        </>
    )
}
