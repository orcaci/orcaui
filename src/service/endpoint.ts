
export const Endpoint = {
    v1: {
        admin: {
            getUsers: "/v1/admin/user/",
            createUser: "/v1/admin/user/",
            getUser: (userId: string) => `/v1/admin/user/${userId}`,
            updateUser: (userId: string) => `/v1/admin/user/${userId}`,
            deleteUser: (userId: string) => `/v1/admin/user/${userId}`,
            getRoles: "/v1/admin/role/",
            createRole: "/v1/admin/role/"
        }
    }
}