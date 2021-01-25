import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttp } from './basehttp.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends BaseHttp {

  constructor(public http: HttpClient) {
    super(http, "students")
  }
}
