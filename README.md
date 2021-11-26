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
|✅|Alert|
|✅|Artboard|
|✅|Avatar|
|✅|Badge|
|✅|Breadcrumbs|
|✅|Button|
|✅|Button Group|
|✅|Card|
|🚧|Carousel|
|✅|Collapse|
|✅|Countdown|
|🚧|Divider|
|🚧|Drawer|
|🚧|Dropdown|
|🚧|Footer|
|🚧|Hero|
|🚧|Indicator|
|✅|Kbd|
|✅|Link|
|✅|Mask|
|🚧|Menu|
|✅|Modal|
|🚧|Navbar|
|🚧|Pagination|
|✅|Progress|
|✅|Stack|
|🚧|Stat|
|🚧|Steps|
|🚧|Tab|
|🚧|Table|
|✅|Tooltip|
|✅|Form Checkbox|
|🚧|Form Input|
|🚧|Form Radio|
|🚧|Form Range|
|🚧|Form Select|
|🚧|Form Textarea|
|🚧|Form Toggle|
|🚧|Mockup Code|
|✅|Mockup Phone|
|✅|Mockup Window|

# Plugins

### Forms
|Status|Component|Library|Type|Localization|
|---|---|---|---|---|
|🚧|Autosize|https://github.com/jackmoore/autosize|Component|-|
|🚧|Dialer|Exclusive|Component|-|
|🚧|File Dropzone|https://github.com/thecodejack/svelte-file-dropzone|Component|Yes|
|🚧|Flatpickr|https://flatpickr.js.org|Component|Yes|
|🚧|Yup Form Validation|https://github.com/KamyarLajani/svelte-yup|Component|Yes|
|🚧|Form Repeater|Exclusive|Action|-|
|🚧|FilePond|https://github.com/pqina/svelte-filepond|Component|Yes|
|🚧|IMask|https://imask.js.org/|Component|-|
|🚧|Input Maxlength|Exclusive|Component|-|
|🚧|noUiSlider|https://github.com/leongersen/noUiSlider|Component|-|
|🚧|Pass Score|https://github.com/scriptex/pass-score|Component|Yes|
|🚧|reCAPTCHA|https://github.com/basaran/svelte-recaptcha-v2|Component|-|
|🚧|Tom Select|https://tom-select.js.org/|Component|Yes|
|🚧|Tags Input|https://github.com/agustinl/svelte-tags-input|Component|-|
|🚧|Multiselectsplitter|?|
|🚧|Tagify|https://yaireo.github.io/tagify|

### Editors
|Status|Component|Library|
|---|---|---|
|🚧|Quill|https://quilljs.com|

### Charts
|Status|Component|Library|
|---|---|---|
|🚧|CarbonCharts|https://github.com/carbon-design-system/carbon-charts|
|🚧|Frappe Charts|https://github.com/himynameisdave/svelte-frappe-charts|
|🚧|Tiny Bar Charts|https://mitcheljager.github.io/svelte-tiny-linked-charts|
|🚧|AmCharts|https://www.amcharts.com|
|🚧|ApexCharts|?|
|🚧|Gantt Chart|https://github.com/ANovokmet/svelte-gantt|
|🚧|ChartJS|?|
|🚧|Flotcharts|?|
|🚧|Heatmap|https://github.com/scottbedard/svelte-heatmap|

### Grids
|Status|Component|Library|
|---|---|---|
|🚧|GridJS|https://gridjs.io|
|🚧|DataTables|?|

### General
|Status|Component|Library|
|---|---|---|
|🚧|Clipboard|https://clipboardjs.com|Component|No|
|🚧|Splide|https://splidejs.com/|
|🚧|CountUp|https://github.com/inorganik/CountUp.js|
|🚧|Svelte Lightbox|https://github.com/Hejtmus/svelte-lightbox|
|🚧|Smooth Scrollbar|https://github.com/idiotWu/smooth-scrollbar|
|🚧|ScrollTo|Exclusive|
|🚧|SweetAlert2|https://sweetalert2.github.io/|
|🚧|Toast|https://github.com/zerodevx/svelte-toast|
|🚧|Typed.js|https://github.com/mattboldt/typed.js|
|🚧|Kanban (Svelte DnD)|https://github.com/isaacHagoel/svelte-dnd-action|
|🚧|Menu|?|
|🚧|BlockUI|?|
|🚧|Cookie|?|
|🚧|Cropper|?|
|🚧|Draggable|?|
|🚧|FullCalendar|?|
|🚧|Drawer|?|
|🚧|jKanbam Board|?|
|🚧|jsTree|?|
|🚧|Quick Search|?|
|🚧|Stepper|?|
|🚧|Sticky|?|
|🚧|Vis-Timeline|?|

### Icons
|Status|Component|Library|
|---|---|---|
|✅|Material Design Icons|https://materialdesignicons.com/|
|🚧|IcoFont|https://icofont.com/|
|🚧|Font Awesome|https://github.com/FortAwesome/Font-Awesome|
|🚧|Line Awesome|https://icons8.com/line-awesome|
