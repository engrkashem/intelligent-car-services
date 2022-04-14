import React from 'react';


const Expert = ({ expert: { name, img } }) => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 rounded">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Expert;