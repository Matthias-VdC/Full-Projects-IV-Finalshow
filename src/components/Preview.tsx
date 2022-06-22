import React from "react";

// Element that displays next to the core buildings in the 3D map.
// Only contains the container you must add children to it

type PreviewProps = {
    children: React.ReactNode;
};

export const Preview = ({ children }: PreviewProps) => {
    return (
        <div className="preview">
            <button className="preview__button">Close</button>
            {children}
        </div>
    );
};
