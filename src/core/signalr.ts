import { HubConnection, HubConnectionBuilder, IStreamResult } from "@microsoft/signalr";

class Signalr {
    private _connection: HubConnection;
    private _isConnected = false;
    private _error: string | null = null;
    private _url: string;

    constructor(url: string) {
        this._url = url;
        this._connection = new HubConnectionBuilder()
            .withUrl(this._url)
            .withAutomaticReconnect()
            .build();
    }

    get isConnected() {
        return this._isConnected;
    }
    get hasError() {
        return this._error != null;
    }
    get error() {
        return this._error;
    }

    public watch(methodName: string, callback: (message: any) => void) {
        this._connection.on(methodName, callback);
    }

    public getStream<T>(methodName: string, args: any = null): IStreamResult<T> {
        return this._connection.stream(methodName, args);
    }

    async connect() {
        try {
            await this._connection.start();
            this._isConnected = true;
        } catch (error) {
            this._error = typeof error === "string" ? error : (error instanceof Error ? error.message : JSON.stringify(error));
            throw error;
        }
    }

    async sendMessage(methodName: string, message: any) {
        await this._connection.invoke(methodName, message);
    }
}

const chatSignalr = new Signalr("/chatHub");
export { chatSignalr };