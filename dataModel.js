/*
One Organization -> Many Meetings
One Organization -> Many Users
One Meeting -> One Agenda
One Agenda -> Many Items
One Item -> Many Motions
One Motion -> Many Votes
One Vote -> One User
*/

function Organization(name){
    this.name = name,
    this.meetings = [],
    this.users = []
}

function Meeting(title, date, time, agenda){
    this.title = title,
    this.date = date,
    this.time = time,
    this.agenda = agenda
}

function Agenda(title){
    this.title = title,
    this.items = []
}

function Item(content){
    this.content = content,
    this.motions = []
}

function Motion(motionedBy, secondedBy, content){
    this.motionedBy = motionedBy, // User who created the motion
    this.secondedBy = secondedBy, // User who seconded the motion
    this.content = content,
    this.votes = []
}

function Vote(user, vote){
    this.user = user, // Person who cast vote
    this.vote = vote // How did they vote? [Yes | No | Present]
}

function User(firstName, lastName, emailAddress, password){
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = function(){returns (this.firstName + " " + this.lastName);},
    this.emailAddress = emailAddress,
    this.password = password,
    this.uid = function(){returns (CryptoJS.MD5(this.fullName() + this.emailAddress)); }
}