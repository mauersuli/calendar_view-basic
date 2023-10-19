
        
        document.addEventListener('DOMContentLoaded', function() {
          var calendarEl = document.getElementById('calendar');
          var calendar = new FullCalendar.Calendar(calendarEl, {
            timeZone: 'Australia/Sydney',
            headerToolbar: {
               left: 'prev,next today',
               center: 'title',
               right: 'dayGridWeek,timeGridDay'
              },
            navLinks: true,
            initialView: 'timeGridDay',
            nowIndicator: true,
            eventClick: function(info) {
              document.getElementById("side-nav").style.display = "block";
              const h1 = document.querySelector("h1")
              h1.innerText = info.event.title;

              const starttime = document.getElementById("start-time")
              starttime.innerText = info.event.start;

              const endtime = document.getElementById("end-time")
              endtime.innerText = info.event.start;

              const desctext = document.getElementById("desc-text")
              desctext.innerText = info.event.description;
           
            },
            events: [
                { // Events - this object will be "parsed" into an Event Object
                title: 'Team awards - Global corp', // a property!
                start: '2023-10-06T14:30:00', // a property!
                end: '2023-10-06T15:30:00',
                description:'Team awards - Global corp',
                allDay: false,
                color: '#18A0FB',
                },
                { // Charities - this object will be "parsed" into an Event Object
                title: 'Betta goodwill drive', // a property!
                start: '2023-10-06T14:45:00', // a property!
                end: '2023-10-06T18:45:00',
                allDay: false,
                color: '#7A66FF',
                },
                { // Catering - this object will be "parsed" into an Event Object
                title: 'ACME org catering ', // a property!
                start: '2023-10-06T10:30:00', // a property!
                end: '2023-10-06T15:30:00',
                allDay: false,
                color: '#1BC47D',
                }
            ]
          });
          calendar.render();


          
        });
        function close_window(){
            document.getElementById("side-nav").style.display = "none"
        }
  
    