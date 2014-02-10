$.RaCalendar.methods = {
  tmpl: function(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
      var keys, v, _i, _len;
      keys = key.split(".");
      v = data[keys.shift()];
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        v = v[key];
      }
      if (typeof v !== "undefined" && v !== null) {
        return v;
      } else {
        return "";
      }
    });
  },
  roundDate: function(date, discrete) {
    discrete = (function() {
      switch (discrete) {
        case '1m':
          return 60000;
        case '5m':
          return 300000;
        case '10m':
          return 600000;
        case '15m':
          return 900000;
        case '30m':
          return 1800000;
        default:
          return 60000;
      }
    })();
    return Math.floor(+date / discrete) * discrete;
  },
  normalizeEvents: function(event) {
    var H, R;
    R = $.RaCalendar.config.events;
    H = $.RaCalendar.handlers;
    return event;
  },
  updateEvents: function(events) {
    return events;
  },
  updateResources: function(resources) {
    return resources;
  }
};