// Create organizations for each of the following: 
// ["etsu faculty senate", "unicoi county commission", "etsu acm", "etsu faculty kick ball league"]

function dataStorage(){

    var organizations = []
    var users = []
    var meetings = []
    var agendas = []
    var items = []
    var motions = []

    // Create organizations
    organizations.push(new Organization("etsu faculty senate"));

    // Create users
    users.push((new User(organizations[0].name, "Stephen",  "Hendrix",      "hendrixs@etsu.edu",        "password1").userRole = "chairperson"));
    users.push( new User(organizations[0].name, "Bill",     "Burr",         "billyBurr@gmail.com",      "myGreatPassword1"));
    users.push( new User(organizations[0].name, "Ronald",   "Funches",      "ronFunches73@etsu.edu",    "that_guy_h8s_linda"));
    users.push( new User(organizations[0].name, "Sarah",    "Silverman",    "silvermans12@etsu.edu",    "hokey_didISayThat94comedy"));
    users.push( new User(organizations[0].name, "Amy",      "Poehler",      "poehlera@etsu.edu",        "1loveLocalGovernment!"));

    // Create Meetings
    meetings.push(new Meeting(organizations[0].name, "New Year Meeting",           new Date("2019/01/07 09:00")));
    meetings.push(new Meeting(organizations[0].name, "General Session Meeting",    new Date("2019/02/16 16:00")));
    meetings.push(new Meeting(organizations[0].name, "Special Budgetary Meeting",  new Date("2019/03/24 16:00")));
    meetings.push(new Meeting(organizations[0].name, "General Session Meeting",    new Date("2019/06/22 17:30")));
    meetings.push(new Meeting(organizations[0].name, "General Session Meeting",    new Date("2019/11/4 16:00")));

    // Create Agendas
    agendas.push(new Agenda(meetings[0].id, meeting[0].title));
    agendas.push(new Agenda(meetings[1].id, meeting[1].title));
    agendas.push(new Agenda(meetings[2].id, meeting[2].title));
    agendas.push(new Agenda(meetings[3].id, meeting[3].title));
    agendas.push(new Agenda(meetings[4].id, meeting[4].title));

    // Create Items
    items.push(new Item(agenda[0].id, "Invocation"));   // 0
    items.push(new Item(agenda[0].id, "Pledge the flag")); // 1
    items.push(new Item(agenda[0].id, "Roll Call")); // 2
    items.push(new Item(agenda[0].id, "Budget Amendments")); // 3
    items.push(new Item(agenda[0].id, "Report on Debt Obligation for County Schools Projects")); // 4
    items.push(new Item(agenda[0].id, "Motion for adjournment")); // 5
    
    items.push(new Item(agenda[1].id, "Greetings")); // 6
    items.push(new Item(agenda[1].id, "Pledge the flag")); // 7
    items.push(new Item(agenda[1].id, "Roll Call")); // 8
    items.push(new Item(agenda[1].id, "Storm Trooper class enrollment fees")); // 9
    items.push(new Item(agenda[1].id, "Report on Revenue for Death Start Project")); // 10
    items.push(new Item(agenda[1].id, "Motion for adjournment")); // 11

    // Create Motions
    motions.push(new Motion(items[2].id, users[0].id, users[1].id, "Roll Call", false));
    motions.push(new Motion(items[3].id, users[0], users[3], "Mayor $48,433.13", true));
    motions.push(new Motion(items[3].id, users[0], users[3], "Circuit Court $24,835.00", true));
    motions.push(new Motion(items[3].id, users[0], users[3], "Highway Department $5,000", true));
    motions.push(new Motion(items[5].id, users[0], users[2], "Meeting adjourned", false));
} 