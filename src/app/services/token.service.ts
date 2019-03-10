import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  public constructor() {

  }

  public getToken(): string {
    return 'ABC';
  }
}
