import React, { useEffect } from "react";
import { useFetchAllUsers } from "../../hooks/users/useUsers";
import Table from "./table";
import "./style.css";
export default function Users() {
  const { data } = useFetchAllUsers();
  return (
    <>
      <Table data={data?.data} />
    </>
  );
}
