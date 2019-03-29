export class Repos {
    constructor(
        public id:number,
        public node_id:string,
        public name:string,
        public fullname:string,
        public avatar_url:string,
        public gravatar_id:number,
        public url:string,
        public html_url:string,
        public followers_url:number,
        public following_url:string,
        public gists_url:string,
        public starred_url:string,
        public subscriptions_url:string,
        public organizations_url:string,
        public repos_url:string,
        public events_url:string,
        public received_events_url:string,
        public type:string,
        public site_admin:boolean,
        public description:string
    ){}
}
