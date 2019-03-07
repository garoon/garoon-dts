declare namespace garoon {
    namespace events {
        function on(
            event: string | string[],
            handler: (event: any) => any
        ): void;
    }
}
