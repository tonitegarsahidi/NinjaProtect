# NinjaProtect

NinjaProtect is a class library to **protect your website from copying or modifying activities such as right click, copy, and modify content**. 

NinjaProtect applies in front-end as 'basic' defense from 'novice' / typical user who wants to copy content or image from your website. 

Here are the activities list which Ninja can protect : 
#### Protected Mouse Activities
* (Mouse) Disable **Right Click**
* (Mouse) Disable **Select Text & Image**
* (Mouse) Disable **Drag an element** _(e.g. drag images to new tab)_
#### Protected Keyboard Activities
* (Shortcut) Disable Ctrl-A (Select All)
* (Shortcut) Disable Ctrl-C (Copy)
* (Shortcut) Disable Ctrl-X (Cut)
* (Shortcut) Disable Ctrl-U (View Source)
* (Shortcut) Disable Ctrl-P (Print)
* (Shortcut) Disable Ctrl-S (Save As Page)
* (Shortcut) Disable Ctrl-Shift-i (Inspect Element)
* (Shortcut) Disable F12 (Developer Mode)



## Installation

1. Clone or Download this repository
2. Copy ninjaprotect.js to your JS folder, 
3. Include it in your HTML file.
```html
<script src="ninjaprotect.js" >
```

## Usage

#### Standard Protection
This is the default protection, as it cover alls protection mentioned above. Create the object then call the ```protectAll()``` function. 

```html
<script>

var guardian = new NinjaProtect();
guardian.protectAll();

</script>
```

#### Custom Protection
You can specifiy what to protect, by passing configuration when creating the object. then calls ```protect()``` function.
```html
<script>

        var myconfig = {
            'disableRightClick' : false, 
            'disableSelect' : false, 
            'disableDrag' : false,   
          
            'disableCopy' : true,   
            'disableCut' : false, 
            'disablePrint' : false, 
            'disableSave' : false, 
            'disableSelectAll' : false, 
    
            'disableViewSource' : false,     
            'disableDeveloperMode' : false, 
            'disableInspectElement' : false, 
            }

        var guardian = new NinjaProtect(myconfig);
        guardian.protect();

</script>
```

## Disclaimer
1. There is no 100%  protection. As the creator, I know that there's still way to view the code / source code from the web.
2. Advance user who know about web development, still able to 'copy' your content through various ways.
3. This script is not yet tested in various browser environment


## Contributing
* Pull requests are welcome. 
* For major changes, please open an issue first to discuss what you would like to change.

## To Do Next
1. Protect from ```PrintScreen```
2. NPM package
3. WP Plugin package


## License
[MIT](https://choosealicense.com/licenses/mit/)