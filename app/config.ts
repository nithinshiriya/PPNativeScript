export class Config {
    static Rest = {
     apiUrl : "http://servicetest.picpollapp.com/PollService.svc/rest/",
     login : "login",
     pollById : "GetPollByID/",
     forgotPassword: "ForgotPassword?Email={0}",
     addpoll: "V2/AddPoll?PollName={0}&EndDate={1}&IsPublic={2}&CatId={3}&Email={4}"
    }
}