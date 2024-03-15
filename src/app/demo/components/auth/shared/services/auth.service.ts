import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, switchMap, throwError } from 'rxjs';
import { HttpClientUtils } from 'src/app/general/shared/http-client-utils';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly urlApiAuth = `${environment.endpointApi}/v1/auth`;

    constructor(private http: HttpClient) {}

    login(user: string, password: string): Observable<User> {
        const userCredentials = {
            user: user,
            password: password,
        };
        return this.http
            .post<any>(`${this.urlApiAuth}/login`, userCredentials)
            .pipe(
                switchMap((respuesta) => {
                    const userAuthenticated = {
                        user: user,
                        rol: respuesta.rol,
                        token: respuesta.accessToken,
                    };
                    localStorage.setItem(
                        'user',
                        JSON.stringify(userAuthenticated)
                    );
                    return of(userAuthenticated);
                }),
                catchError((error) => {
                    const errorApp = HttpClientUtils.process(error);
                    return throwError(errorApp);
                })
            );
    }

    isLoggedIn() {
        const token = localStorage.getItem('user');
        return !!token;
    }
}
