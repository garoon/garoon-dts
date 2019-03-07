declare namespace garoon {
    namespace events {
        function on(
            event: string | string[],
            handler: (event: any) => any
        ): void;
    }
    namespace base {
        namespace user {
            function getLoginUser(): LoginUser;
            // TODO nullable check
            interface LoginUser {
                id: string;
                garoonId: string;
                code: string;
                name: string;
                email: string;
                url: string;
                phone: string;
                timezone: string;
                language: string;
            }
        }
    }
}
