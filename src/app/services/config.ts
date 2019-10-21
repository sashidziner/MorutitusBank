import 'rxjs/add/operator/map';
import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
export const Domain_URL = new InjectionToken<string>('Domain_URL');

export function ConfigFactory(configService: ConfigService, file: string, property: string) {
    return configService.loadJSON(file)[property];
}

@Injectable()
export class ConfigService {

    public config: any;
    constructor(private http: HttpClient) {
    }

    loadJSON(filePath) {
        const json = this.loadTextFileAjaxSync(filePath, 'application/json');
        return JSON.parse(json);
    }

    loadTextFileAjaxSync(filePath, mimeType) {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.open('GET', filePath, false);
        if (mimeType != null) {
            if (xmlhttp.overrideMimeType) {
                xmlhttp.overrideMimeType(mimeType);
            }
        }
        xmlhttp.send();
        if (xmlhttp.status === 200) {
            return xmlhttp.responseText;
        } else {
            return null;
        }
    }
}
