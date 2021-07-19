<img src="https://gw.alipayobjects.com/zos/antfincdn/R8sN%24GNdh6/language.svg" width="18"> English | [简体中文](./README.zh-CN.md)

<h1 align="center">G2Plot</h1>

<div align="center">

A charting library based on the Grammar of Graphics.1

[![Version](https://badgen.net/npm/v/@antv/g2plot)](https://npmjs.com/@antv/g2plot)
[![NPM downloads](https://img.shields.io/npm/dm/@antv/g2plot.svg)](https://npmjs.com/@antv/g2plot)
![Latest commit](https://badgen.net/github/last-commit/antvis/G2Plot)
[![build Status](https://github.com/antvis/G2Plot/workflows/build/badge.svg?branch=master)](https://github.com/antvis/G2Plot/actions?query=workflow%3Abuild)
[![coverage](https://img.shields.io/coveralls/antvis/G2Plot/master.svg)](https://coveralls.io/github/antvis/G2Plot)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/antvis/g2plot.svg)](http://isitmaintained.com/project/antvis/g2plot "Percentage of issues still open")
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/antvis/g2plot.svg)](http://isitmaintained.com/project/antvis/g2plot "Average time to resolve an issue")

<p align="center">
  <a href="https://g2plot.antv.vision/en">Website</a> •
  <a href="https://g2plot.antv.vision/en/docs/manual/getting-started">Quick Start</a> •
  <a href="https://www.yuque.com/antv/g2plot">Blog</a> •
  <a href="https://github.com/antvis/theme-set">AntV ThemeSet</a>
</p>

</div>

G2Plot is an interactive and responsive charting library.
Based on [the grammar of graphics](https://github.com/antvis/g2), you can easily make superior statistical charts through a few lines of code.

<div align="center">
<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*sXqrRrEwFRQAAAAAAAAAAABkARQnAQ" width="800">
</div>
<br/>

## ✨ Features

### 📦 Pretty & Lightweight

With [AntV](https://antv.vision/en) design principles of data visualization, G2Plot provides standard and elegant visual styles as well as neat config options.

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*rqI2Qqt0pTwAAAAAAAAAAABkARQnAQ" />

### 📊 Responsive

G2Plot guarantees the readability of the charts in different sizes and data.

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*ifK1TLi_4WoAAAAAAAAAAABkARQnAQ" />

### 🔳 Storytelling

With the feature of _layers_, charts can be grouped, nested or linked to do exploratory analysis and expressive storytelling.

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*gd00QaD9110AAAAAAAAAAABkARQnAQ" />

## 📦 Installation

```bash
$ npm install @antv/g2plot
```

## 🔨 Usage

<img src="https://gw.alipayobjects.com/mdn/rms_d314dd/afts/img/A*37siRJftYDIAAAAAAAAAAABkARQnAQ" />

```html
<div id="container"></div>
```

```ts
import { Bar } from '@antv/g2plot';

const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
];

const bar = new Bar('container', {
  data,
  xField: 'sales',
  yField: 'year',
  seriesField: 'year',
});

bar.render();
```

## 🤝 How to Contribute

Your contributions are always welcome! Please Do have a look at the [issues](https://github.com/antvis/g2plot/issues) first.

To become a contributor, please follow our [contributing guide](https://github.com/antvis/g2plot/blob/master/CONTRIBUTING.md).

> 📊 Total: <kbd>**35**</kbd>

<a href="https://github.com/visiky" title="visiky">
  <img src="https://avatars.githubusercontent.com/u/15646325?v=4" width="50" />
</a>
<a href="https://github.com/hustcc" title="hustcc">
  <img src="https://avatars.githubusercontent.com/u/7856674?v=4" width="50" />
</a>
<a href="https://github.com/lxfu1" title="lxfu1">
  <img src="https://avatars.githubusercontent.com/u/31396322?v=4" width="50" />
</a>
<a href="https://github.com/liuzhenying" title="liuzhenying">
  <img src="https://avatars.githubusercontent.com/u/11748654?v=4" width="50" />
</a>
<a href="https://github.com/zqlu" title="zqlu">
  <img src="https://avatars.githubusercontent.com/u/1142242?v=4" width="50" />
</a>
<a href="https://github.com/arcsin1" title="arcsin1">
  <img src="https://avatars.githubusercontent.com/u/13724222?v=4" width="50" />
</a>
<a href="https://github.com/zhangzhonghe" title="zhangzhonghe">
  <img src="https://avatars.githubusercontent.com/u/38434641?v=4" width="50" />
</a>
<a href="https://github.com/yp0413150120" title="yp0413150120">
  <img src="https://avatars.githubusercontent.com/u/24318174?v=4" width="50" />
</a>
<a href="https://github.com/BBSQQ" title="BBSQQ">
  <img src="https://avatars.githubusercontent.com/u/35586469?v=4" width="50" />
</a>
<a href="https://github.com/DarrenPei" title="DarrenPei">
  <img src="https://avatars.githubusercontent.com/u/42288791?v=4" width="50" />
</a>
<a href="https://github.com/pearmini" title="pearmini">
  <img src="https://avatars.githubusercontent.com/u/49330279?v=4" width="50" />
</a>
<a href="https://github.com/connono" title="connono">
  <img src="https://avatars.githubusercontent.com/u/36756846?v=4" width="50" />
</a>
<a href="https://github.com/yujs" title="yujs">
  <img src="https://avatars.githubusercontent.com/u/16610138?v=4" width="50" />
</a>
<a href="https://github.com/afc163" title="afc163">
  <img src="https://avatars.githubusercontent.com/u/507615?v=4" width="50" />
</a>
<a href="https://github.com/mjul" title="mjul">
  <img src="https://avatars.githubusercontent.com/u/142868?v=4" width="50" />
</a>
<a href="https://github.com/jinhuiWong" title="jinhuiWong">
  <img src="https://avatars.githubusercontent.com/u/23117130?v=4" width="50" />
</a>
<a href="https://github.com/kagawagao" title="kagawagao">
  <img src="https://avatars.githubusercontent.com/u/6930280?v=4" width="50" />
</a>
<a href="https://github.com/MrSmallLiu" title="MrSmallLiu">
  <img src="https://avatars.githubusercontent.com/u/26038018?v=4" width="50" />
</a>
<a href="https://github.com/ntscshen" title="ntscshen">
  <img src="https://avatars.githubusercontent.com/u/21041458?v=4" width="50" />
</a>
<a href="https://github.com/guonanci" title="guonanci">
  <img src="https://avatars.githubusercontent.com/u/12762626?v=4" width="50" />
</a>
<a href="https://github.com/ai-qing-hai" title="ai-qing-hai">
  <img src="https://avatars.githubusercontent.com/u/65594180?v=4" width="50" />
</a>
<a href="https://github.com/DawnLck" title="DawnLck">
  <img src="https://avatars.githubusercontent.com/u/12195307?v=4" width="50" />
</a>
<a href="https://github.com/CarisL" title="CarisL">
  <img src="https://avatars.githubusercontent.com/u/13416424?v=4" width="50" />
</a>
<a href="https://github.com/mayneyao" title="mayneyao">
  <img src="https://avatars.githubusercontent.com/u/6588202?v=4" width="50" />
</a>
<a href="https://github.com/Plortinus" title="Plortinus">
  <img src="https://avatars.githubusercontent.com/u/20693993?v=4" width="50" />
</a>
<a href="https://github.com/csjkevin" title="csjkevin">
  <img src="https://avatars.githubusercontent.com/u/17211870?v=4" width="50" />
</a>
<a href="https://github.com/yanglbme" title="yanglbme">
  <img src="https://avatars.githubusercontent.com/u/21008209?v=4" width="50" />
</a>
<a href="https://github.com/beewolf233" title="beewolf233">
  <img src="https://avatars.githubusercontent.com/u/24711525?v=4" width="50" />
</a>
<a href="https://github.com/lqzhgood" title="lqzhgood">
  <img src="https://avatars.githubusercontent.com/u/9134671?v=4" width="50" />
</a>
<a href="https://github.com/neoddish" title="neoddish">
  <img src="https://avatars.githubusercontent.com/u/6898060?v=4" width="50" />
</a>
<a href="https://github.com/stack-stark" title="stack-stark">
  <img src="https://avatars.githubusercontent.com/u/46991054?v=4" width="50" />
</a>
<a href="https://github.com/NewByVector" title="NewByVector">
  <img src="https://avatars.githubusercontent.com/u/20186737?v=4" width="50" />
</a>
<a href="https://github.com/xrkffgg" title="xrkffgg">
  <img src="https://avatars.githubusercontent.com/u/29775873?v=4" width="50" />
</a>
<a href="https://github.com/xingwanying" title="xingwanying">
  <img src="https://avatars.githubusercontent.com/u/10885578?v=4" width="50" />
</a>
<a href="https://github.com/juzhiyuan" title="juzhiyuan">
  <img src="https://avatars.githubusercontent.com/u/2106987?v=4" width="50" />
</a>

## 📧 Contact us

钉钉群组号码: 30233731

<img src="https://gw.alipayobjects.com/zos/antfincdn/9sHnl5k%26u4/dingdingqun.png" width="200" height="266" />

## 🔗 Links

<img src="https://gw.alipayobjects.com/zos/antfincdn/1yMwFkBvyV/chartcube-logo-cube.svg" width="18"> [ChartCube](https://chartcube.alipay.com/) - Online chart making tool based on G2Plot.

## License

MIT
