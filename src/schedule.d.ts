declare namespace garoon {
    namespace types {
        namespace schedule {
            type Visibility =
                | 'PUBLIC'
                | 'PRIVATE'
                | 'SET_PRIVATE_WATCHERS';

            interface Event {
                id: string;
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
                isAllDay: boolean;
                isStartOnly: boolean;
                attendees: Attendee[];
                attendeesCandidate: Entity[];
                watchers: Entity[];
                watchersCandidate: Entity[];
                companyInfo: CompanyInfo;
                attachments: Attachment[];
                start: DateTime;
                end: DateTime;
                originalStartTimeZone: string;
                originalEndTimeZone: string;
                facilities: Facility[];
                facilitiesCandidate: Facility[];
                facilityUsingPurpose: string;
                facilityReservationInfo: FacilityReservationInfo;
                facilityUsageRequests: FacilityUsageRequest[];
                approvedBy: User[];
                visibilityType: Visibility;
                additionalItems: AdditionalItems;
                useAttendanceCheck: boolean;
                repeatInfo?: RepeatInfo;
            }

            interface RepeatInfo {
                range: {
                    type:
                        | 'THIS_EVENT_ONLY'
                        | 'ON_AND_AFTER_THIS_EVENT'
                        | 'ALL_EVENT';
                    date: string;
                };
                type:
                    | 'EVERY_DAY'
                    | 'EVERY_WEEKDAY'
                    | 'EVERY_WEEK'
                    | 'EVERY_1STWEEK'
                    | 'EVERY_2NDWEEK'
                    | 'EVERY_3RDWEEK'
                    | 'EVERY_4THWEEK'
                    | 'EVERY_LASTWEEK'
                    | 'EVERY_MONTH';
                period: Period;
                time: Period;
                timeZone: string;
                isAllDay: boolean;
                isStartOnly: boolean;
                dayOfWeek: string;
                dayOfMonth: string;
                exclusiveDateTimes: Period[];
                temporaryEventCandidates: {
                    start: DateTime;
                    end: DateTime;
                    facility: Facility;
                }[];
            }

            interface Period {
                start: string;
                end: string;
            }

            interface AdditionalItems {
                item: Item;
            }

            interface Item {
                value: string;
            }

            interface DateTime {
                dateTime: string;
                timeZone: string;
            }

            interface Attachment {
                id: string;
                name: string;
                contentType: string;
                size: string;
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

            interface Attendee {
                id: string;
                name: string;
                type: string;
                code: string;
                attendanceResponse: {
                    status: string;
                    comment: string;
                };
            }
            interface Entity {
                id: string;
                name: string;
                type: string;
                code: string;
            }

            interface User {
                id: string;
                code: string;
                name: string;
            }

            interface Facility {
                id: string;
                code: string;
                name: string;
            }

            interface FacilityReservationInfo {
                [itemCode: string]: {
                    type:
                        | 'SINGLE_LINE_TEXT'
                        | 'MULTI_LINE_TEXT'
                        | 'DROP_DOWN';
                    value: string;
                };
            }

            interface FacilityUsageRequest {
                facility: Facility;
                status:
                    | 'IN_PROGRESS'
                    | 'REJECTED'
                    | 'APPROVED';
                approvedDateTime: string;
            }
        }
    }
}
