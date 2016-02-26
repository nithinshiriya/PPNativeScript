export class RestUser {
    Name: string;
    Email: string;
    Password: string;
    ProfileID: string = "ProfileId";
    Gender:string = "None";
    DOB:string;
    SocialNType: string = "123me";
    ActionType:string="123meregister";
    AppID: string="picpoll2"; 
    LoggedInFrom: string="PicPoll-Mobile";
}


export interface IRestLoginResponse {
    UserName: string;
    UserID: string;
    PollCount: number;
    PollTime: number;
    ExpiriyDate: string;
    Tocken: string;
    Status: string;
    Message: string;
    ActiveUser: boolean;
    EnableShare: boolean;
    Email: string;
    ProfileID: string;
    PicURL: string;
    Type: string;               
}