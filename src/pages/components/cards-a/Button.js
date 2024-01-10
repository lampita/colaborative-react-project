


const Button = () => {
    return (
        <>
        <button>Comprar</button>

        <style jsx>
            {`
                button {
                    color: white;
                    background-color: blue;
                    border-radius: .5rem;
                    box-shadow: 1px 2px 2px black;
                    padding: 10px 20px;
                    text-transform: uppercase;
                    font-weight: bold;
                    transition:0.25s;
                    }
                button:hover {
                    transform: translateY(2px);
                    box-shadow: none;
                    }
            `}
        </style>
        </>
    )
}

export default Button