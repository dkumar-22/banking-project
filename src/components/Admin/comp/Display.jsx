import React from "react"
import AdminSearchBar from "./AdminSearchBar"
import AdminUsersList from "./adminUsersList";
import AdminTransactionsList from "./adminTransactionsList";
import HomeDisplay from "./HomeDisplay";

export default function Display({ curr }) {
    return (
        <>
            <HomeDisplay />
            {/* {
                curr == "" ? <HomeDisplay/> :
                curr == "user" ? <AdminUsersList/> : <AdminTransactionsList/> 
            } */}
        </>
    );
}