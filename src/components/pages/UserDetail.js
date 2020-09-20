import React, { useState, useEffect } from 'react';


function UserDetail({ match }) {

    useEffect(() => {
        fetchUser();
        console.log(match);
    })

    const [ user, setUser ] = useState({});

    const fetchUser = async () => {
        const fetchUser = await fetch(`https://jsonplaceholder.typicode.com/users=${match.params.id}`);

        const user = await fetchUser.json();
        setUser(user)
        console.log(user);
    }

        return (
            <div>
                <h1>Item</h1>
            </div>
        )
}

export default UserDetail;
