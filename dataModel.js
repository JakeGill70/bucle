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
    this.name = name.toLowerCase(); // Force the organization name to lower case so that is can be used in autocomplete-search.js
};

function Meeting(organization, title, dateTime){
    this.organization = organization,
    this.title = title,
    this.dateTime = dateTime,
    this.id = (md5("meeting"+this.title+this.date+this.time))
};

function Agenda(meetingID){
    this.meetingID = meetingID,
    this.id = (md5("agenda"+this.title+this.meeting))
};

function Item(agendaID, content){
    this.agendaID = agendaID,
    this.content = content,
    this.id = (md5("item"+this.agendaID+this.content))
};

function Motion( itemID, motionedBy, secondedBy, content, requiresVote){
    this.itemID = itemID,
    this.motionedBy = motionedBy, // User who created the motion
    this.secondedBy = secondedBy, // User who seconded the motion
    this.content = content,
    this.requiresVote = requiresVote,
    this.id = (md5("motion"+this.itemID+this.content))
};

function Vote(motionID, user, vote){
    this.motionID = motionID,
    this.user = user, // Person who cast vote
    this.vote = vote // How did they vote? [Yes | No | Present]
};

function User(organization, firstName, lastName, emailAddress, password){
    this.organization = organization,
    this.firstName = firstName,
    this.lastName = lastName,
    this.fullName = (this.firstName + " " + this.lastName),
    this.emailAddress = emailAddress,
    this.password = password,
    this.id = (md5(this.fullName + this.emailAddress))
    this.userRole = "member"
};