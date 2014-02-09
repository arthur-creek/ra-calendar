$ ->
  settings =
    config:
      events:
        id: "id"
        resource_id: "channel_id"
        title: "name"
        begin: "time"
        end: ""
        duration: "duration"
      resources:
        id: "id"
        title: "name"
    handlers:
      parse: (date) -> Date.parse(date)
    events: [
      id: 1
      channel_id: 1
      name: "My first event"
      time: "2014-02-08 09:00:00"
      url: "http://ya.ru"
    ,
      id: 2
      channel_id: 1
      name: "My first event"
      time: "2014-02-08 09:00:00"
      duration: 3600
    ]
    resources: [
      id: 1
      name: "Channel 1"
    ]


  $("#ra-calendar").RaCalendar(settings)
