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
        namespace evnet {
            function get(): garoon.types.schedule.Event;
        }
    }

    namespace types {
        namespace schedule {
            interface User {
                id: string;
                code: string;
                name: string;
            }
            interface CompanyInfo {
                name: string;
                zipCode: string;
                address: string;
                route: string;
                routeTime: string;
                routeFare: string;
                phone: string;
            }
            interface Attachments {
                id: string;
                contentType: string;
                name: string;
                size: string;
            }
            interface EventDate {
                dateTime: string;
                timeZone: string;
            }
            interface Attendee {
                id: string;
                code: string;
                name: string;
                type: 'ORGANIZATION' | 'USER';
                attendanceResponse: AttendanceResponse;
            }

            interface AttendanceResponse {
                status: 'PENDING' | 'ACCEPTED' | 'DECLINED';
                comment: string;
            }

            interface AttendeesCandidate {
                id: string;
                code: string;
                name: string;
                type: string;
            }

            interface Watcher {
                id: string;
                code: string;
                name: string;
                type: 'ORGANIZATION' | 'USER' | 'ROLE';
            }

            interface WatcherCandidate {
                id: string;
                code: string;
                type: string;
            }

            interface Facilities {
                id: string;
                name: string;
                code: string;
            }

            interface FacilitiesCandidate {
                id: string;
                name: string;
                code: string;
            }

            interface Event {
                id: string;
                version: string;
                creator: User;
                createdAt: string;
                updater: User;
                updatedAt: string;
                eventType:
                    | 'REGULAR'
                    | 'REPEATING'
                    | 'ALL_DAY';
                eventMenu: string;
                subject: string;
                notes: string;
                visibilityType:
                    | 'PUBLIC'
                    | 'PRIVATE'
                    | 'SET_PRIVATE_WATCHERS';
                useAttendanceCheck: boolean;
                companyInfo: CompanyInfo;
                attachments: Attachments[];
                start: EventDate;
                end: EventDate;
                isAllDay: boolean;
                isStartOnly: boolean;
                originalStartTimeZone: string;
                originalEndTimeZone: string;
                attendees: Attendee[];
                attendeesCandidate: AttendeesCandidate[];
                watchers: Watcher[];
                watchersCandidate: WatcherCandidate[];
                facilitiesCandidate: FacilitiesCandidate[];
                facilityUsingPurpose: string;
                facilityReservationInfo: {
                    [key: string]: {
                        id: string;
                        value: string;
                    };
                };
            }
        }
    }
}
