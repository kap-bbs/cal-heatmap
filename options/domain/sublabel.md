---
layout: default
title: subLabel
nav_order: 2
parent: domain
grand_parent: Options
---

<style>
  .sublabel-text {
    font-size: 8px!important;
  }
</style>

# subLabel

Specify all options related to the domain's subLabel configuration
{: .fs-6 }

```js
type SubLabelOptions = {
  text: () => string[],
  radius?: number,
  width?: number,
  height?: number,
  gutter?: number,
  textAlign?: 'start' | 'middle' | 'end',
};
```

{: .warning}
SubLabel is still a work in progress, and API may changes in the future.
It its current form, this option is only used to show weekdays label
when the subDomain is set to `day`.
Future updates will allow more customization, and broaden the scope of application.

<hr/>
{: .mt-8}

## text

A function which return an array of labels.

```js
text: () => string[],
```

The number of returned result is up to you, and generally
depends on the subDomain's type.

#### Example

<div class="code-example" >
  <div id="text-example-1" style="display: inline-block; "></div>
  <script>
    const cal3 = new CalHeatmap();
    cal3.paint({
      range: 1,
      itemSelector: '#text-example-1',
      domain: {
        type: 'year',
        label: {
          text: null
        },
        subLabel: {
          text: () => dayjs.weekdays().map((d) => d[0].toUpperCase()),
        }
      },
      subDomain: { type: 'day' },
    })
  </script>
</div>
```js
const cal = new CalHeatmap();
cal.paint({
  range: 1,
  domain: {
    type: 'year',
    subLabel: {
      // Following function returns a list of locale aware weekdays
      text: () => dayjs.weekdays().map((d) => d[0].toUpperCase()),
    }
  },
  subDomain: { type: 'day' },
})
````

{: .mt-6}

#### Example

Reproducing the day labels from github contribution heatmap

<div class="code-example" >
  <div id="text-example-5" style="display: inline-block; "></div>
  <script>
    const cal2 = new CalHeatmap();
    cal2.paint({
      range: 1,
      itemSelector: '#text-example-5',
      domain: {
        type: 'year',
        label: {
          text: null
        },
        subLabel: {
          width: 30,
          textAlign: 'start',
          text: () => dayjs.weekdaysShort().map((d, i) => i % 2 == 0 ? '' : d),
        }
      },
      subDomain: { type: 'day' },
    })
  </script>
</div>
```js
const cal = new CalHeatmap();
cal.paint({
  range: 1,
  domain: {
    type: 'year',
    subLabel: {
      width: 30,
      textAlign: 'start',
      text: () => dayjs.weekdaysShort().map((d, i) => i % 2 == 0 ? '' : d),
    }
  },
  subDomain: { type: 'day' },
})
````

{: .mt-8}

## radius

Border radius of the subLabel's background, in pixel

```js
radius?: number,
```

Default: `0`

#### Playground

<div class="code-example" >
  <style>
    #radius-example-2 .sublabel-rect {
      fill: gray!important;
    }
    #radius-example-2 .sublabel-text {
      fill: #fff;
    }
  </style>
  <div id="radius-example-2" style="display: inline-block; "></div>
</div>
<div class="highlighter-rouge p-3">
  <label>
    Radius:
    <input type="range" min="0" max="15" value="0" class="slider" id="radius-slider" >
    <span id="radius-value">0</span> pixels
</label>
  <script>
      const cal4 = new CalHeatmap();
      let radius = 0;
      cal4.paint({ domain: { type: 'month', subLabel: { radius: radius, text: () => dayjs.weekdays().map((d) => d[0].toUpperCase()) } }, subDomain: { type: 'day' } , range: 3, itemSelector: '#radius-example-2'});
      d3.select("#radius-slider").on("input", function() {
        cal4.paint({ domain: { subLabel: { radius: +this.value } } });
        d3.select("#radius-value").html(+this.value);
      });
  </script>
</div>

{: .note}
By default, the background is transparent. Use the CSS class `.sublabel-rect` to style it.
{: .mt-8}

## width

Width of the subLabel, in pixel

```js
width?: number,
```

Default: [subDomain's width](/options/subDomain.html#width)

#### Playground

<div class="code-example" >
  <style>
    #width-example-2 .sublabel-rect {
      stroke: gray;
    }
  </style>
  <div id="width-example-2" style="display: inline-block; "></div>
</div>
<div class="highlighter-rouge p-3">
  <label>
    Width:
    <input type="range" min="1" max="50" value="10" class="slider" id="width-slider" >
    <span id="width-value">10</span> pixels
</label>
  <script>
      const cal5 = new CalHeatmap();
      let width = 10;
      cal5.paint({ domain: { type: 'month', subLabel: { width: width, text: () => dayjs.weekdays().map((d) => d[0].toUpperCase()) } }, subDomain: { type: 'day' } , range: 3, itemSelector: '#width-example-2'});
      d3.select("#width-slider").on("input", function() {
        cal5.paint({ domain: { subLabel: { width: +this.value } } });
        d3.select("#width-value").html(+this.value);
      });
  </script>
</div>

{: .mt-8}

## height

Height of the subLabel, in pixel

```js
height?: number,
```

Default: [subDomains' height](/options/subDomain.html#height)

#### Playground

<div class="code-example" >
  <style>
    #height-example-1 .sublabel-rect {
      stroke: gray;
    }
  </style>
  <div id="height-example-1" style="display: inline-block; "></div>
</div>
<div class="highlighter-rouge p-3">
  <label>
    Height:
    <input type="range" min="1" max="50" value="10" class="slider" id="height-slider" >
    <span id="height-value">10</span> pixels
</label>
  <script>
      const cal6 = new CalHeatmap();
      let height = 10;
      cal6.paint({ domain: { type: 'month', height: 10, subLabel: { height: height, text: () => dayjs.weekdays().map((d) => d[0].toUpperCase()) } }, subDomain: { type: 'day' } , range: 3, itemSelector: '#height-example-1'});
      d3.select("#height-slider").on("input", function() {
        cal6.paint({ domain: { subLabel: { height: +this.value } } });
        d3.select("#height-value").html(+this.value);
      });
  </script>
</div>

{: .warning}
Total height can no be greater that the domain height

{: .mt-8}

## gutter

Space between each subLabel, on pixel

```js
gutter?: number,
```

Default: [subDomains' gutter](/options/subDomain.html#gutter)

#### Playground

<div class="code-example" >
  <style>
    #gutter-example-1 .sublabel-rect {
      stroke: gray;
    }
  </style>
  <div id="gutter-example-1" style="display: inline-block; "></div>
</div>
<div class="highlighter-rouge p-3">
  <label>
    Gutter:
    <input type="range" min="0" max="10" value="2" class="slider" id="gutter-slider" >
    <span id="gutter-value">2</span> pixels
</label>
  <script>
      const cal7 = new CalHeatmap();
      let gutter = 2;
      cal7.paint({ domain: { type: 'month', subLabel: { gutter: gutter, text: () => dayjs.weekdays().map((d) => d[0].toUpperCase()) } }, subDomain: { type: 'day' } , range: 3, itemSelector: '#gutter-example-1'});
      d3.select("#gutter-slider").on("input", function() {
        cal7.paint({ domain: { subLabel: { gutter: +this.value } } });
        d3.select("#gutter-value").html(+this.value);
      });
  </script>
</div>

{: .mt-8}

## textAlign

Horizontal alignment of the subLabel

```js
textAlign?: 'start' | 'middle' | 'end',
```

Default: `middle`

#### Playground

<div class="code-example" >
  <style>
    #textAlign-example-1 .sublabel-rect {
      stroke: gray;
    }
  </style>
  <div id="textAlign-example-1" style="display: inline-block; "></div>
  <script>
      const cal8 = new CalHeatmap();
      let textAlign ='middle';
      cal8.paint({ domain: { type: 'month', subLabel: { width: 35, textAlign: textAlign, text: () => dayjs.weekdays().map((d) => d[0].toUpperCase()) } }, subDomain: { type: 'day' } , range: 3, itemSelector: '#textAlign-example-1'});
      d3.select("#textAlign-slider").on("input", function() {
        cal8.paint({ domain: { subLabel: { textAlign: this.value } } });
        d3.select("#textAlign-value").html(+this.value);
      });
  </script>
</div>
<div class="highlighter-rouge p-3">
  <div class="fs-3">
    <div class="btn btn-blue" onClick="cal8.paint({ domain: { subLabel: { textAlign: 'start'} }  }); return false;">Left</div>
    <div class="btn btn-blue" onClick="cal8.paint({ domain: { subLabel: { textAlign: 'middle'} }  }); return false;">Middle</div>
    <div class="btn btn-blue" onClick="cal8.paint({ domain: { subLabel: { textAlign: 'end'} }  }); return false;">Right</div>
  </div>
</div>