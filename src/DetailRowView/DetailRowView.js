import React from 'react';
import './DetailRowView.css'

function DetailRowView({person}) {

    return(
        <div className="detail-row-view">
            <h2>Details about User</h2>
            <div>
                <p>
                    View user: <b>{person.firstName + ' ' + person.lastName}</b>
                </p>

                <b>Description:</b> <br/>
                <p>
                    {person.description}
                </p>
                <p>
                    Address: <b>{person.address.streetAddress}</b>
                </p>
                <p>
                    City: <b>{person.address.city}</b>
                </p>
                <p>
                    State: <b>{person.address.state}</b>
                </p>
                <p>
                    Zip code: <b>{person.address.zip}</b>
                </p>
            </div>
        </div>
    )
}

export default DetailRowView;