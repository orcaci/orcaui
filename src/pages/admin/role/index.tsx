import { Table } from "../../../core/table";
import {PencilIcon, TrashIcon} from "@heroicons/react/solid";
import {useState} from "react";
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
    key: "status",
    name: "Status"
  },
  {
    key: "action",
    name: "action",
    render: (row: any) => {
      return <div className={"flex flex-row flex-nowrap gap-4"}>
        <PencilIcon className="h-4 w-4" aria-hidden="true" />
        <TrashIcon className="h-4 w-4" aria-hidden="true"/>
      </div>
    },
  }
];
const SOURCE = [
  {
    no: 1,
    name: "vasanth",
    age: 34,
    gender: "Male",
    Qualification: "BE",
    Desigination: "SSE"
  },
  {
    no: 2,
    name: "vasanth",
    age: 34,
    gender: "Male",
    Qualification: "BE",
    Desigination: "SSE"
  },
  {
    no: 3,
    name: "vasanth",
    age: 34,
    gender: "Male",
    Qualification: "BE",
    Desigination: "SSE"
  }
];

export function RoleManagement() {
  const [roles, setRoles] = useState([]);
  const [columns, setColumns] = useState(COLUMNS);
  const init = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setColumns(COLUMNS);
    getRoles();
  }
  const getRoles = () => {
    Service.get(Endpoint.v1.admin.getRoles).then(response => {
      const roles = response.json();
      setRoles(roles);
    })
  }
  return (
      <div className={"flex-auto"}>
        <Table
          column={columns}
          source={roles}
          pageSizeOption={[10, 25, 50]}
          defaultPageSize={1}
          defaultKey={"no"}
        />
      </div>
  );
}
