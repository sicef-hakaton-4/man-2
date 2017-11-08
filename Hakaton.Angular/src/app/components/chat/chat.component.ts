import { Component, OnInit, HostListener } from '@angular/core';
import { Message } from '../../models/message';
import { RestService } from '../../services/rest.service';
import { Endpoint } from '../../utilities/constants/endpoint.constants';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[];
  currentMessage: string;
  currentUser: string;
  constructor(private rest: RestService) { }

  ngOnInit() {
    this.messages = this.mockData();
    let recieverId = "";
    if (localStorage.getItem('id') == "8ef10143-abbf-4488-bd83-061102d957f3"){
      recieverId = "f15a9403-bd1a-4230-b134-d8c45fee6195";
    }
    else {
      recieverId = "8ef10143-abbf-4488-bd83-061102d957f3";
    }
    localStorage.setItem("recieverId",recieverId);
    //this.getMessages();
  }

  getUser(): string{
    return localStorage.getItem('id');
  }


  getReciever(): string{
    return localStorage.getItem('recieverId');
  }
  mockData() : Message[] {
    var data = new Array<Message>();
    data = [new Message("Hello there, I have reviewed your CV and i think you would fit in our company","f15a9403-bd1a-4230-b134-d8c45fee6195","",(new Date).toDateString()),new Message("Alright, I really like the conditions that you are offering","8ef10143-abbf-4488-bd83-061102d957f3","8ef10143-abbf-4488-bd83-061102d957f3",(new Date).toDateString()),
                        new Message("I would like of you to take a simple test, before we continue","f15a9403-bd1a-4230-b134-d8c45fee6195","",(new Date).toDateString())];
    return data;
  }

  getMessages() : void {
    this.rest.getWithHeader(Endpoint.GET_MESSAGES+"?senderId="+this.getUser() + "&recieverId=" + this.getReciever() ,null).subscribe(
      res=> {
        var data = JSON.parse(res._body);
        this.messages = data;
      }
    );
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if (event.keyCode == 13){
      this.addMessage();
    }
  }

  addMessage() : void {
    var newMessage = new Message(this.currentMessage,this.getUser(),this.getReciever(),(new Date).toDateString());
    this.messages = [...this.messages, newMessage];
    this.currentMessage = "";
    // var chatHistory = document.getElementById("messageBody");
    // chatHistory.scrollTop = chatHistory.scrollHeight + 100;
  }

  recieveNewMessage() : void {
    console.log("triggered");
    let storedMsg = JSON.parse(localStorage.getItem('newMessage'));
    console.log(storedMsg.RecieverId);
    if (storedMsg.RecieverId == this.getUser()){
      console.log("entered");
      var newMessage = new Message(storedMsg.Content,storedMsg.SenderId,storedMsg.RecieverId,(new Date).toDateString());
      this.messages = [...this.messages, newMessage];
    }
  }
}
