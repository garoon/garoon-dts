/// <reference path='./schedule.d.ts' />
/// <reference path='./workflow.d.ts' />

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
    type HttpMethod =
        | 'GET'
        | 'POST'
        | 'PATCH'
        | 'DELETE'
        | 'PUT';
    function api(
        pathOrUrl: string,
        method: HttpMethod,
        params: any,
        callback: (response: any) => any,
        errback: (response: string | any) => any
    ): void;
    function api(
        pathOrUrl: string,
        method: HttpMethod,
        params: any
    ): garoon.Promise<any>;
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

    namespace schedule {
        namespace event {
            function get(): garoon.types.schedule.Event;
            function set(
                event: garoon.types.schedule.Event
            ): void;
            function getHeaderSpaceElement(): HTMLElement | null;
        }
        namespace calender {
            type ViewType =
                | 'GROUP_DAY'
                | 'GROUP_WEEK'
                | 'DAY'
                | 'WEEK'
                | 'MONTH';
            function getDayFirstSpaceElement(
                viewType: ViewType,
                date: string
            ): HTMLElement | null;
        }
    }

    namespace message {
        namespace body {
            interface Recipients {
                recipients: Recipient[];
            }
            interface Recipient {
                id?: string;
                type: 'USER';
                code?: string;
                name?: string;
            }
            function set(recipients: Recipients): void;

            function getItemLastSpaceElement(
                fieldCode: 'recipients'
            ): HTMLElement | null;
        }
    }

    namespace workflow {
        namespace request {
            function get(): garoon.types.workflow.ApproveRequest;
            function set(
                approveRequest: garoon.types.workflow.ApproveRequest
            ): void;
            function getSpaceElement(
                code: string
            ): HTMLElement | null;
            function setItemEditable(
                itemCode: string | string[],
                status: boolean
            ): void;
        }
    }
}
