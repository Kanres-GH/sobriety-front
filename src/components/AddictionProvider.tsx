import React, { createContext, useContext, useState } from "react";

type AddictionContextType = {
    addiction: string;
    setAddiction: (value: string) => void;
};

const AddictionContext = createContext<AddictionContextType | undefined>(undefined);

export const AddictionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [addiction, setAddiction] = useState<string>("");

    return (
        <AddictionContext.Provider value={{ addiction, setAddiction }}>
            {children}
        </AddictionContext.Provider>
    );
};

export const useAddiction = (): AddictionContextType => {
    const context = useContext(AddictionContext);
    if (!context) {
        throw new Error("useAddiction must be used within an AddictionProvider");
    }
    return context;
};
