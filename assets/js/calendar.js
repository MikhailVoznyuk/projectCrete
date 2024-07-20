console.log(makeEventsJuly());

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: makeAllEvents(),
    });
    
    calendar.render();
});

function makeAllEvents () {
    return makeEventsJuly().concat(makeEventsAugust(), makeEventsSeptember())

}

function makeEventsJuly () {
    let events = [];
    
    for (let i = 1; i <= 31; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        
        if (i < 18) {
            
            event.backgroundColor = "#222222";
        } else if (i < 20) {
            event.title = "242€";
            event.backgroundColor = "#5ce65c";
            event.borderColor = "#5ce65c";
            event.textColor = "#000";
        } else if (i < 27) {
            
            event.backgroundColor = "#222";
        } else {
            event.title = "242€";
            event.backgroundColor = "#5ce65c";
            event.borderColor = "#5ce65c";
            event.textColor = "#000";
        }
        event.start = `2024-07-${day}`;
        event.end = `2024-07-${day}`;
        events.push(event);
    }
    return events
}

function makeEventsAugust () {
    let events = [];
    
    for (let i = 1; i <= 31; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        if (i < 17) {
            event.backgroundColor = "#222222";
        } else if (i < 20) {
            event.title = "375€";
            event.backgroundColor = "#5ce65c";
            event.borderColor = "#5ce65c";
            event.textColor = "#000";
        } else if (i < 27) {
            event.backgroundColor = "#222";
        } else {
            event.title = "374€";
            event.backgroundColor = "#5ce65c";
            event.borderColor = "#5ce65c";
            event.textColor = "#000";
        }
        event.start = `2024-08-${day}`;
        event.end = `2024-08-${day}`;
        events.push(event);
    }
    return events
}

function makeEventsSeptember () {
    let events = [];
    
    for (let i = 1; i <= 30; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        event.title = "242€";
        event.backgroundColor = "#5ce65c";
        event.borderColor = "#5ce65c";
        event.textColor = "#000";
        event.start = `2024-09-${day}`;
        event.end = `2024-09-${day}`;
        events.push(event);
    }
    return events
}