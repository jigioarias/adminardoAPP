import { HttpErrorResponse } from '@angular/common/http';
import { ErrorApp } from './error-app';

export class HttpClientUtils {
    static process(error: HttpErrorResponse): ErrorApp {
        let errorApp: ErrorApp = null;
        const mainError = error.error;
        switch (error.status) {
            case 500:
                errorApp = ErrorApp.errorServidor(mainError);
                break;
            default:
                errorApp = ErrorApp.errorCliente(mainError);
        }
        return errorApp;
    }
}
