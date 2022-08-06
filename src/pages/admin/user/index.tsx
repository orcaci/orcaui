import { Table } from "../../../core/table";
import {PencilIcon, TrashIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";
import {Service} from "../../../service";
import {Endpoint} from "../../../service/endpoint";

const COLUMNS = [
  {
    key: "id",
    name: "S.No"
  },
  {
    key: "name",
    name: "Name"
  },
  {
    key: "first_name",
    name: "First Name"
  },
  {
    key: "last_name",
    name: "Last Name"
  },
  {
    key: "email",
    name: "Email"
  },
  {
    key: "Status",
    name: "User Status"
  },
  {
    key: "action",
    name: "action",
    render: (row: any) => {
      return <div className={"flex flex-row flex-nowrap gap-4"}>
        <PencilIcon className="h-4 w-4" aria-hidden="true"/>
        <TrashIcon className="h-4 w-4" aria-hidden="true"/>
      </div>
    },
  }
];
const SOURCE = [
  {
    id: 1,
    name: "vasanth",
    age: 34,
    gender: "Male",
    Qualification: "BE",
    Desigination: "SSE"
  },
  {
    id: 2,
    name: "vasanth",
    age: 34,
    gender: "Male",
    Qualification: "BE",
    Desigination: "SSE"
  },
  {
    id: 3,
    name: "vasanth",
    age: 34,
    gender: "Male",
    Qualification: "BE",
    Desigination: "SSE"
  }
];

export function UserManagement() {
  const [users, setUsers] = useState([]);
  const [columns, setColumns] = useState(COLUMNS);
  useEffect(() => {
    console.log(
        "Occurs ONCE, AFTER the initial render."
    );
    getUsers();
  }, []);
  const getUsers = () => {
    Service.get(Endpoint.v1.admin.getUsers).then(response => {
      setUsers(response);
    })
  }
  return (
      <div className={"flex-auto"}>
        <Table
          column={columns}
          source={users}
          pageSizeOption={[10, 25, 50]}
          defaultPageSize={1}
          defaultKey={"no"}
        />
      </div>
  );
}
