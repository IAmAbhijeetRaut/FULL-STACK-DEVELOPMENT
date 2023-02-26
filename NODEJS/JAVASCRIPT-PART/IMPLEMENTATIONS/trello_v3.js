let myTodos = {
    day : 'Monday', 
    meetings : 0,
    meetDone : 0, 

    addMeeting : function (meet = 0) {
        this.meetings = this.meetings + meet;
        console.log(`Hey ${meet} meetings are now added`);
    },
    
    meetingsDone : function (meet = 0) {
        this.meetDone = this.meetDone - meet;
        console.log(`Hey ${meet} meetings are marked as Done and now ${this.meetings+this.meetDone} meetings are left`)
    },
    
    resetDay : function(){
        console.log(`\nResetting myTodos`)
        this.meetings = 0;
        this.meetDone = 0;
        console.log(`
        \nAfter Resetting
        meetings : ${this.meetings}
        meetDone : ${this.meetDone}`);
    },
    
    getSummaryOfDay : function(){
        let meetLeft = this.meetings + this.meetDone
        console.log(`You have ${meetLeft} meetings today`);
    }
};

myTodos.addMeeting(4);
myTodos.addMeeting(2);
myTodos.addMeeting(3);
myTodos.getSummaryOfDay();
myTodos.meetingsDone(4);
myTodos.getSummaryOfDay();
myTodos.resetDay();



