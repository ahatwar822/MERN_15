# SCSS (Sassy CSS) Complete Guide

SCSS (Sassy CSS) is a CSS preprocessor that extends the functionality of CSS by adding features like **variables**, **nesting**, **modularity**, **mixins**, **inheritance**, and more.  
It helps developers write cleaner, reusable, and more maintainable stylesheets.

---

## 🔑 Key Features of SCSS

- **Variables**: Store values in variables and reuse them.  
- **Nesting**: Nest selectors inside one another for better readability.  
- **Partials & Import**: Split CSS into smaller files and import them.  
- **Mixins**: Reusable blocks of styles that can take arguments.  
- **Inheritance (Extend)**: Share a set of CSS properties from one selector to another.  
- **Modularity**: Helps organize CSS into modules for reusability.  
- **Operators**: Perform calculations like `+`, `-`, `*`, `/` directly in SCSS.  

---

## 📌 Code Examples

### ✅ Variables
```scss
$primary-color: #3498db;
$padding: 10px;

.button {
  background: $primary-color;
  padding: $padding;
}
```

### ✅ Nesting
```scss
.nav {
  ul {
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    text-decoration: none;
  }
}
```

### ✅ Partials & Import
```scss
// _reset.scss
* { margin: 0; padding: 0; }

// style.scss
@import 'reset';
body { font-family: Arial; }
```

### ✅ Mixins
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  @include flex-center;
}
```

### ✅ Inheritance (Extend)
```scss
.btn { 
  padding: 10px; 
  border-radius: 5px; 
}

.btn-primary {
  @extend .btn;
  background: blue;
  color: white;
}
```

### ✅ Operators
```scss
.container {
  width: 100% - 20px;
  height: 50px * 2;
}
```

---

## 🎯 Conclusion
SCSS makes writing CSS more **powerful, modular, and maintainable**.  
It is widely used in modern front-end development with frameworks like React, Angular, and Vue.
