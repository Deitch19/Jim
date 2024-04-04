import React, { useState, useEffect } from "react";
import UserData from "./UserData";
import memData from "./memData";

const App = () => {
    const [mem, setMem] = useState([]);

    useEffect(() => {
        setMem(memData);
    }, []);

    return (
        <div className="table-container">
            <h1 className="title">User Data</h1>
            <table className="custom-table">
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Joining Date</th>
                        <th>Months</th>
                        {/* <th>Valid Till</th> */}
                    </tr>
                </thead>
                <tbody>
                    <UserData users={mem}/>
                </tbody>
            </table>
        </div>
    );
}

export default App;
