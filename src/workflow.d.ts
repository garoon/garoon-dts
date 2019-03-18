declare namespace garoon {
    namespace types {
        namespace workflow {
            interface ApproveRequest {
                id: string;
                status: Status;
                createdAt: string;
                processingStepCode: string;
                name: string;
                number: string;
                isUrgent: boolean;
                applicant: Applicant;
                items: Items;
                steps: Steps;
                availableOperations: AvailableOperations;
                folders: Folder[];
            }

            interface Folder {
                id: string;
                type:
                    | 'UNPROCESSED'
                    | 'SENT'
                    | 'RECEIVED'
                    | 'DRAFT'
                    | 'FINISH';
            }

            interface AvailableOperations {
                sentBackTargets: '$applicant' | string[];
                list: (
                    | 'SENT_BACK'
                    | 'APPROVE'
                    | 'REJECT'
                    | 'WITHDRAW'
                    | 'CANCEL'
                    | 'CONFIRM'
                    | 'ACKNOWLEDGE')[];
            }
            interface StringValueItem {
                name: string;
                type:
                    | 'SINGLE_LINE_TEXT'
                    | 'MULTI_LINE_TEXT'
                    | 'NUMBER'
                    | 'CALC'
                    | 'RADIO_BUTTON'
                    | 'DROP_DOWN'
                    | 'Date';
                value: string;
            }

            interface BooleanValueItem {
                name: string;
                type: 'CHECK_BOX';
                value: boolean;
            }

            interface FileItemValueItem {
                name: string;
                type: 'FILE';
                value: {
                    id: string;
                    contentType: string;
                    name: string;
                    size: string;
                }[];
            }

            interface DateTimeValueItem {
                name: string;
                type: 'DATETIME';
                value: {
                    date: string;
                    time: string;
                };
            }

            interface RouteNaviValueItem {
                name: string;
                type: 'ROUTE_NAVI';
                value: {
                    route: string;
                    expense: string;
                };
            }

            interface Steps {
                [id: string]: {
                    id: string;
                    name: string;
                    requirement: string;
                    isApprovalStep: number;
                    processors: Processor[];
                };
            }

            interface Items {
                [id: string]:
                    | StringValueItem
                    | BooleanValueItem
                    | FileItemValueItem
                    | DateTimeValueItem
                    | RouteNaviValueItem;
            }

            interface Applicant {
                code: string;
                name: string;
                proxy: {
                    code: string;
                    name: string;
                };
            }

            interface Processor {
                code: string;
                name: string;
                result: string;
                operatedAt: string;
                comment: string;
                proxy: {
                    code: string;
                    name: string;
                };
            }

            interface Status {
                name: string;
                type: string;
            }
        }
    }
}
