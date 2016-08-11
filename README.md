# ng2-echarts

## Installation

To install this library, install peer dependencies first:

```bash
$ npm install --save echarts@^3.2.0 angular2@2.0.0-beta.0 es6-promise@^3.0.2 es6-shim@^0.33.3 reflect-metadata@0.1.2 rxjs@5.0.0-beta.0 zone.js@0.5.10
```

Then, install this library running:

```bash
$ npm install --save ng2-echarts
```

## Usage

To use this library, you must load ```angular2``` (and its dependencies) and ```echarts```.

A running example on how to use this library can be found at [AngularShowcase](http://github.com/AngularShowcase/angular2-seed-ng2-echarts).

## Using with [Angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

* Install required packages : `echarts` and `ng2-echarts`
  ```
  npm install --save echarts ng2-echarts
  ```
* Import `Ng2Echarts` in the component
  ```
  import { Ng2Echarts } from 'ng2-echarts';
  ```
* Include `Ng2Echarts` in the directives
  ```
  @Component({
    template: require('./template.html'),
    directives: [
      Ng2Echarts
    ]
  })
  export class UsingNg2EchartsComponent {

  }
  ```
* Prepare Chart Data

  ```
  private chartData = {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    series: [
      {
        name: 'NC',
        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
      }, {
        name: 'OK',
        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
      }, {
        name: 'KO',
        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'VALID',
        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'CHECK',
        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'COR',
        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
      }
    ]
  };
  ```
* Update template with the required directive
  ```
  <div [ng2-echarts]="chartData"></div>
  ```


## Changelog

Look at [changelog page](CHANGELOG.md)

## Contributors



## License

