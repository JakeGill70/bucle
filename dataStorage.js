// Create organizations for each of the following: 
// ["etsu faculty senate", "unicoi county commission", "etsu acm", "etsu faculty kick ball league"]

var DataStorage = {
    getTestData : function (){
        var organizations = [];
        var users = [];
        var meetings = [];
        var agendas = [];
        var items = [];
        var motions = [];

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
        meetings.push(new Meeting(organizations[0].name, "General Session Meeting",    new Date("2019/11/04 16:00")));

        // Create Agendas
        agendas.push(new Agenda(meetings[0].id, meetings[0].title));
        agendas.push(new Agenda(meetings[1].id, meetings[1].title));
        agendas.push(new Agenda(meetings[2].id, meetings[2].title));
        agendas.push(new Agenda(meetings[3].id, meetings[3].title));
        agendas.push(new Agenda(meetings[4].id, meetings[4].title));

        // Create Items
        items.push(new Item(agendas[0].id, "Invocation"));   // 0
        items.push(new Item(agendas[0].id, "Pledge the flag")); // 1
        items.push(new Item(agendas[0].id, "Roll Call")); // 2
        items.push(new Item(agendas[0].id, "Budget Amendments")); // 3
        items.push(new Item(agendas[0].id, "Report on Debt Obligation for County Schools Projects")); // 4
        items.push(new Item(agendas[0].id, "Motion for adjournment")); // 5
        
        items.push(new Item(agendas[1].id, "Greetings")); // 6
        items.push(new Item(agendas[1].id, "Pledge the flag")); // 7
        items.push(new Item(agendas[1].id, "Roll Call")); // 8
        items.push(new Item(agendas[1].id, "Storm Trooper class enrollment fees")); // 9
        items.push(new Item(agendas[1].id, "Report on Revenue for Death Start Project")); // 10
        items.push(new Item(agendas[1].id, "Motion for adjournment")); // 11

        // Create Motions
        motions.push(new Motion(items[2].id, users[0].id, users[1].id, "Roll Call", false));
        motions.push(new Motion(items[3].id, users[0], users[3], "Mayor $48,433.13", true));
        motions.push(new Motion(items[3].id, users[0], users[3], "Circuit Court $24,835.00", true));
        motions.push(new Motion(items[3].id, users[0], users[3], "Highway Department $5,000", true));
        motions.push(new Motion(items[5].id, users[0], users[2], "Meeting adjourned", false));

        // Package Results
        var dataStorage = { "organizations" : organizations, "users" : users, "meetings" : meetings, "agendas" : agendas, "items" : items, "motions" : motions};
        return dataStorage;
    },

    setData : function(key, value){
        window.localStorage.setItem(key, value);
    },

    getData : function(key){
        return window.localStorage.getItem(key);
    },

    delData : function(key){
        window.localStorage.removeItem(key);
    },

    clearData : function(){
        if(confirm("Are you sure you want to delete all of your local storage associated with BUCLE? This will cause some data to be lost permentantly.")){
            window.localStorage.clear();
        }
    },

    toJSON : function(value){
        return JSON.stringify(value);
    },

    fromJSON : function(value){
        return JSON.parse(value);
    }
}