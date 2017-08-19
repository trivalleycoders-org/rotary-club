# Using CSS-Modules

CSS-Modules makes all CSS selectors local to the component. This is seen as an advantage as it avoids conflicts between selectors. However, it does seem to mean you will write more lines of CSS but with less frustration. There is a syntax to make a selector global but I have not learned to do so yet.

## How to write selectors with CSS-Modules
- Each component will have its own style.css file
- The component will import the file
````
import styles from './style.css'
````
- All styles for the component are written in the components style.css file

### Selector names
- Selector names must be JavaScript compliant
- CSS properties are written as normal
- Pseudo-classes work are are written the same if they don't contain a hypyen. I have not tried a pseudo class with hyphenated name yet but I suspect it will need to be in camelCase
- Here is a example
````
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

## More
I'm sure there is more to it but that is all I know for now
