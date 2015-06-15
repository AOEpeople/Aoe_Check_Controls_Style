# Aoe_Check_Controls_Style
Radio/checkbox form controls decorator

## HTML
##### Markup example 1 (no javascript required, requires the browser to support the :checked selector)
```
<label class="custom-checkbox" for="my_checkbox">
    <input type="checkbox" name="name" id="my_checkbox">
    <span class="ctx-control"></span>
    My label text
</label>
```

##### Markup example 2 (requires javascript to place markup for decoration)
```
<label for="my_checkbox">
    <input type="checkbox" name="name" id="my_checkbox">
    My label text
</label>
```

## Usage JavaScript
Required if you want to ensure the required markup is given or you want add a fallback for browsers don't support the :checked selector

```
var myControlsDecorator = new CheckControlsDecorator(options);
```

#### CheckControlsDecorator options
##### controlsSel
Inputs jQuery selector. Default: `input[type="checkbox"], input[type="radio"]`

##### checkboxHolderCN
Checkbox input wrapper class name. Default: `custom-checkbox`

##### radioHolderCN 
Radio input wrapper class name. Default: `custom-checkbox`

#### CheckControlsDecorator methods
##### refresh
Updates check controls style
