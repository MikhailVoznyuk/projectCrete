

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar-magnolia');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: {
        url: 'https://www.airbnb.ru/calendar/ical/1181781053173749823.ics?s=6383e0c78987277d8373d53a432845f7',
        format: 'ics'
    },
    });
    
    calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar-jasmine');
    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: makeAllEventsMagnolia(),
    });
    
    calendar.render();
});


function makeAllEventsMagnolia () {
    return makeEventsMagnoliaJuly().concat(makeEventsMagnoliaAugust(), makeEventsMagnoliaSeptember());

}

function makeAllEventsJasmine () {
    return makeEventsJasmineJuly().concat(makeEventsJasmineAugust(), makeEventsJasmineSeptember());
}

function makeEventsMagnoliaJuly () {
    let events = [];
    
    for (let i = 1; i <= 31; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        
        if (i < 20) {
            event.backgroundColor = "#222222";
        } else {
            event.title = "349€";
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

function makeEventsMagnoliaAugust () {
    let events = [];
    
    for (let i = 1; i <= 31; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        if (i < 7) {
            event.title = "349€";
            event.backgroundColor = "#5ce65c";
            event.borderColor = "#5ce65c";
            event.textColor = "#000";
        } else if (i < 21) {
            event.backgroundColor = "#222";
        } else if (i < 27) {
            event.backgroundColor = "#222";
        } else {
            event.title = "239€";
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

function makeEventsMagnoliaSeptember () {
    let events = [];
    
    for (let i = 1; i <= 30; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        event.title = "224€";
        event.backgroundColor = "#5ce65c";
        event.borderColor = "#5ce65c";
        event.textColor = "#000";
        event.start = `2024-09-${day}`;
        event.end = `2024-09-${day}`;
        events.push(event);
    }
    return events
}

function makeEventsJasmineJuly () {
    let events = [];
    
    for (let i = 1; i <= 31; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        
        
        event.backgroundColor = "#222222";
        
        event.start = `2024-07-${day}`;
        event.end = `2024-07-${day}`;
        events.push(event);
    }
    return events
}

function makeEventsJasmineAugust () {
    let events = [];
    
    for (let i = 1; i <= 31; i++) {
        let day = (String(i).length > 1) ? String(i) : "0" + String(i);
        let event = new Object;
        if (i < 17) {
            event.backgroundColor = "#222222";
        } else if (i < 20) {
            event.title = "374€";
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

function makeEventsJasmineSeptember () {
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

