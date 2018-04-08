import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: String[] = [];

  constructor() { }

  add(message: String): void {
    this.messages.push(message);
  }

  clear() : void {
    this.messages = [];
  }

}
