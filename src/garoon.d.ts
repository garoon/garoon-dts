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
        namespace request {
            function getRequestToken(): string;
        }
    }

    namespace connect {
        namespace kintone {
            function getRequestToken(): garoon.Promise<
                string
            >;
        }
    }

    class Promise<T> {
        constructor(
            callback: (
                resolve: (resolved: T) => any,
                reject: (rejected: any) => any
            ) => void
        );

        then(callback: (resolved: T) => any): Promise<any>;
        catch(
            callback: (rejected: any) => any
        ): Promise<any>;

        static resolve(resolved: any): Promise<any>;
        static reject(rejected: any): Promise<any>;
        static all(
            listOfPromise: Promise<any>[]
        ): Promise<any>;
    }
}
