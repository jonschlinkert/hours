# hours [![NPM version](https://badge.fury.io/js/hours.svg)](http://badge.fury.io/js/hours)

> Get the number of hours for a day, week and the elapsed hours for the current day.

## Install with [npm](npmjs.org)

```bash
npm i hours --save
```

## Run tests

```bash
npm test
```

## Usage

```js
var hours = require('hours');

// elapsed hours today
console.log(hours('today'));
//=> 19
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/hours/issues)

I'd like to implement the following if someone wants to do a PR before I get around to them:

 - [x] ~~`today`: function to calculate hours since beginning of the day~~
 - [ ] `month`: function to calculate hours since beginning of the month
 - [ ] `year`: function to calculate hours since beginning of the year

I'm also open to other ideas for this lib.

## Related

Other libs I maintain

- [days]
- [minutes]
- [month]
- [months]
- [seconds]
- [week]
- [weekday]
- [year]

From other maintainers

- [current-day-number]
- [current-week-number] - like [week] but takes a different approach to getting the week number.
- [week-hours]

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 07, 2014. To update, run `npm i -g verb && verb`._

[current-day-number]: https://github.com/tunnckoCore/current-day-number
[current-week-number]: https://github.com/tunnckoCore/current-week-number
[week-hours]: https://github.com/tunnckoCore/week-hours
[days]: https://github.com/jonschlinkert/days
[minutes]: https://github.com/jonschlinkert/minutes
[month]: https://github.com/jonschlinkert/month
[months]: https://github.com/jonschlinkert/months
[seconds]: https://github.com/jonschlinkert/seconds
[week]: https://github.com/jonschlinkert/week
[weekday]: https://github.com/jonschlinkert/weekday
[year]: https://github.com/jonschlinkert/year