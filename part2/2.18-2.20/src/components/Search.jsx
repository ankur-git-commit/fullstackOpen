
export default function Search( {searchTerm, handleSearch}){

    return (
        <>
            <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="search-field">
                    Find countries: {""}
                    <input type="text"
                        name="search-field"
                        id="search-field"
                        autoComplete="off"
                        value={searchTerm}
                        onChange={handleSearch}
                        required
                    />
                </label>
            </form>
        </>
    )
}