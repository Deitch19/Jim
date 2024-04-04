import React from "react";

const UserData = ({ users }) => {
    return (
        <>
            {users.map((curUser) => {
                const { _id, name, email, num, iniDate, months, __v } = curUser;
                return (
                    <tr key={_id}>
                        {/* <td>{_id}</td> */}
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{num}</td>
                        <td>{iniDate}</td>
                        {/* <td>{months}</td> */}
                        <td>{__v}</td>
                    </tr>
                );
            })}
        </>
    );
}

export default UserData;
