
export const Endpoint = {
    v1: {
        auth: {
            login: "/v1/auth/signin"
        },
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