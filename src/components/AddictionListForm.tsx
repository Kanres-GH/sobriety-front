import { useState, useEffect } from "react";
// import { getPersonDependencies } from "../api_service";

export type Addiction = {
    id: string;
    name: string;
};

type AddictionListFormProps = {
    addiction: string;
    setAddiction: (value: string) => void;
    error: string;
};

export default function AddictionListForm({ addiction, setAddiction, error }: AddictionListFormProps) {
    const [selectedAddiction, setSelectedAddiction] = useState("")
    const [addictions, setAddictions] = useState<Addiction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('https://diploma-backend-3e4r.onrender.com/auth/deps')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setAddictions(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching addictions:", error);
                setLoading(false);
            });
    }, []);

    function handleClick(e: React.MouseEvent<HTMLLIElement>) {
        const addictionArray = addictions.find((i) => i.name === e.currentTarget.innerHTML)
        console.log(addictionArray?.id);
        setSelectedAddiction(e.currentTarget.innerHTML);
        setAddiction(addictionArray?.id );
    }

    return (
        <>
            <div className="reg-log-main-content-heading">
                <h1 style={{fontWeight: '500', fontSize: '1.6em', textAlign: 'center', letterSpacing: 1.5}}>
                    What kind of addiction do you want to get rid of?
                </h1>
            </div>
            <span style={{color: '#6de38c', alignSelf: 'center', fontSize: '1.5em', letterSpacing: 1.5, cursor: 'auto'}}>
                {selectedAddiction}
            </span>
            <p style={{color: 'gray', alignSelf: 'center'}}>You can add more later.</p>

            <div className="reg-log-main-ul">
                {loading ? (
                    <p>Loading addictions...</p>
                ) : (
                    <ul className="reg-log-ul" id="addiction-list">
                        {addictions.map((addictionItem) => (
                            <li
                                key={addictionItem.id}
                                tabIndex={0}
                                value={addictionItem.name}
                                onClick={handleClick}
                            >
                                {addictionItem.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {error && <p style={{ color: 'red', alignSelf: 'center' }}>{error}</p>}
        </>
    );
}
