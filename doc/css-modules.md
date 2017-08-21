# Using CSS-Modules

CSS-Modules makes all CSS selectors local to the component. This is seen as an advantage as it avoids conflicts between selectors. However, it does seem to mean you will write more lines of CSS but with less frustration. There is a syntax to make a selector global but I have not learned to do so yet.

## Note: bootstrap styles are excluded from CSS-Modues and are global

## How to write selectors with CSS-Modules
- Each component will have its own style.css file
- The component will import the file
````javascript
import styles from './style.css'
````
- All styles for the component are written in the components style.css file

### Selector names
- Selector names must be JavaScript compliant
- CSS properties are written as normal
- Pseudo-classes work are are written the same if they don't contain a hypyen. I have not tried a pseudo class with hyphenated name yet but I suspect it will need to be in camelCase
- Here is a example
````css
.menuItem:hover {
  border-color: #22C365;
  box-shadow: 0 0 0 8px rgba(34, 195, 101, 0.1);
  color: white;
}
````
- You can use shorter selector names. If writing in traditional CSS I would have called (and did actually) the above selector .desktopItem:hover as there is also a .mobileItem:hover. With CSS-Modules you do not need this longer name.

### Using selectors
- Below is an example of using a style. 'styles' is the name of the imported style.css file noted above. The selectors in become JavaScript objects.
````html
<div className={styles.desktopMenuItems}>
  {renderMenuItems}
</div>
````

### One Key Difference
With traditional CSS you might do something below where .callout is the base style and .callout-danger & .callout-warning build on top of it.
````css
.callout {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #eee;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #999999;
}
.callout-danger {
  border-left-color: #ce4844;
  background-color: white;
}
.callout-warning {
  border-left-color: #ffe202;
  background-color: white;
}
````
With CSS-Modules would can still do this but applying two or more styles to the same element requires the use of the 'classnames' package which removes the savings the above tries to achieve. The way to make these styles with CSS-Modules is:
````css
.callout-default {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #eee;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #999999;
}
.callout-danger {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #eee;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #ce4844;
  background-color: white;
}
.callout-warning {
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #eee;
  border-left-width: 5px;
  border-radius: 3px;
  border-left-color: #ffe202;
  background-color: white;
}
````
**_And these examples are likely candidates for global styles unless you had a 'callout' component which I do have in my new blog._**
## More
I'm sure there is more to it but that is all I know for now
