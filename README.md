<p align="center">
  <img src="https://user-images.githubusercontent.com/7969579/143521717-89332cc9-c943-43e1-8883-60059c1de93b.png">
<p/>

# Svelte 3 components built with Tailwind and DaisyUI
This library provides an easy way to get a Svelte project up and running as fast as possible by giving you all the tools you need to build complex web applications from the ground up without having to deal with importing and implementing external JavaScript libraries.

**You get ALL the tools you need with NO HASSLE!**

## Install

`npm install --save svelthor`

## Usage

_You need to configure DaisyUI component library in order to use the Svelte components provided by Svelthor._

### Add DaisyUI in your project
After installing Svelthor you will need to add [DaisyUI](https://daisyui.com/docs/install) to your project as well.

### Using Svelthor

Then you can start using Svelthor by importing just the components you'll need:

```html![143480957-b6dd8361-0149-4bb0-83fd-29c49c4f3de3](https://user-images.githubusercontent.com/7969579/143482577-3406747b-ee12-46ac-a9ea-7e34b4bbbcd7.png)

<script>
  import { Button, Icon } from 'svelthor';
</script>

<Button color="primary" outline>
  <Icon name="account" />
</Button>
```

# Components
|Status|Name|
|---|---|
|:heavy_check_mark:|Alert|
|:heavy_check_mark:|Artboard|
|:heavy_check_mark:|Avatar|
|:heavy_check_mark:|Badge|
|:heavy_check_mark:|Breadcrumbs|
|:heavy_check_mark:|Button|
|:heavy_check_mark:|Button Group|
|:heavy_check_mark:|Card|
|:construction:|Carousel|
|:heavy_check_mark:|Collapse|
|:heavy_check_mark:|Countdown|
|:construction:|Divider|
|:construction:|Drawer|
|:construction:|Dropdown|
|:construction:|Footer|
|:construction:|Hero|
|:construction:|Indicator|
|:heavy_check_mark:|Kbd|
|:heavy_check_mark:|Link|
|:heavy_check_mark:|Mask|
|:construction:|Menu|
|:heavy_check_mark:|Modal|
|:construction:|Navbar|
|:construction:|Pagination|
|:heavy_check_mark:|Progress|
|:heavy_check_mark:|Stack|
|:construction:|Stat|
|:construction:|Steps|
|:construction:|Tab|
|:construction:|Table|
|:heavy_check_mark:|Tooltip|
|:heavy_check_mark:|Form Checkbox|
|:construction:|Form Input|
|:construction:|Form Radio|
|:construction:|Form Range|
|:construction:|Form Select|
|:construction:|Form Textarea|
|:construction:|Form Toggle|
|:construction:|Mockup Code|
|:heavy_check_mark:|Mockup Phone|
|:heavy_check_mark:|Mockup Window|

# Plugins

### Forms
|Status|Component|Library|Type|Localization|
|---|---|---|---|---|
|:construction:|Autosize|https://github.com/jackmoore/autosize|Component|-|
|:construction:|Dialer|Exclusive|Component|-|
|:construction:|File Dropzone|https://github.com/thecodejack/svelte-file-dropzone|Component|Yes|
|:construction:|Flatpickr|https://flatpickr.js.org|Component|Yes|
|:construction:|Yup Form Validation|https://github.com/KamyarLajani/svelte-yup|Component|Yes|
|:construction:|Form Repeater|Exclusive|Action|-|
|:construction:|FilePond|https://github.com/pqina/svelte-filepond|Component|Yes|
|:construction:|IMask|https://imask.js.org/|Component|-|
|:construction:|Input Maxlength|Exclusive|Component|-|
|:construction:|noUiSlider|https://github.com/leongersen/noUiSlider|Component|-|
|:construction:|Pass Score|https://github.com/scriptex/pass-score|Component|Yes|
|:construction:|reCAPTCHA|https://github.com/basaran/svelte-recaptcha-v2|Component|-|
|:construction:|Tom Select|https://tom-select.js.org/|Component|Yes|
|:construction:|Tags Input|https://github.com/agustinl/svelte-tags-input|Component|-|
|:construction:|Multiselectsplitter|?|
|:construction:|Tagify|https://yaireo.github.io/tagify|

### Editors
|Status|Component|Library|
|---|---|---|
|:construction:|Quill|https://quilljs.com|

### Charts
|Status|Component|Library|
|---|---|---|
|:construction:|CarbonCharts|https://github.com/carbon-design-system/carbon-charts|
|:construction:|Frappe Charts|https://github.com/himynameisdave/svelte-frappe-charts|
|:construction:|Tiny Bar Charts|https://mitcheljager.github.io/svelte-tiny-linked-charts|
|:construction:|AmCharts|https://www.amcharts.com|
|:construction:|ApexCharts|?|
|:construction:|Gantt Chart|https://github.com/ANovokmet/svelte-gantt|
|:construction:|ChartJS|?|
|:construction:|Flotcharts|?|
|:construction:|Heatmap|https://github.com/scottbedard/svelte-heatmap|

### Grids
|Status|Component|Library|
|---|---|---|
|:construction:|GridJS|https://gridjs.io|
|:construction:|DataTables|?|

### General
|Status|Component|Library|
|---|---|---|
|:construction:|Clipboard|https://clipboardjs.com|Component|No|
|:construction:|Splide|https://splidejs.com/|
|:construction:|CountUp|https://github.com/inorganik/CountUp.js|
|:construction:|Svelte Lightbox|https://github.com/Hejtmus/svelte-lightbox|
|:construction:|Smooth Scrollbar|https://github.com/idiotWu/smooth-scrollbar|
|:construction:|ScrollTo|Exclusive|
|:construction:|SweetAlert2|https://sweetalert2.github.io/|
|:construction:|Toast|https://github.com/zerodevx/svelte-toast|
|:construction:|Typed.js|https://github.com/mattboldt/typed.js|
|:construction:|Kanban (Svelte DnD)|https://github.com/isaacHagoel/svelte-dnd-action|
|:construction:|Menu|?|
|:construction:|BlockUI|?|
|:construction:|Cookie|?|
|:construction:|Cropper|?|
|:construction:|Draggable|?|
|:construction:|FullCalendar|?|
|:construction:|Drawer|?|
|:construction:|jKanbam Board|?|
|:construction:|jsTree|?|
|:construction:|Quick Search|?|
|:construction:|Stepper|?|
|:construction:|Sticky|?|
|:construction:|Vis-Timeline|?|

### Icons
|Status|Component|Library|
|---|---|---|
|:heavy_check_mark:|Material Design Icons|https://materialdesignicons.com/|
|:construction:|IcoFont|https://icofont.com/|
|:construction:|Font Awesome|https://github.com/FortAwesome/Font-Awesome|
|:construction:|Line Awesome|https://icons8.com/line-awesome|
