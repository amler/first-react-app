function handleFormSubmit(e) {
    e.preventDefault();
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}