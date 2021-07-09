# `vue-stylist` lmao

interestingly reactive styling in vue.

## why lmao

basically vue has `<style>` tags within its single-file components. these are very cool and convenient, however there's no way to have css properties in the style tag react to changes to props/data variables of your component.

usually, to do this, you'd write some inline styles targeting the element you want to apply a variable-dependent css rule upon. however, the more you need to do this, the more bloated your template feels (or your js if you writie the inline styles there).

what `vue-stylist` does, is create a way to easily work with reactive styles, all while keeping **all** your css within the style tag of your sfc.

oh also its like *under 800kb* **ungzipped**

## how lmao

essentially it works by taking advantage of css variables, which are quite underrated even though they are very cool.

rather than explicitly declaring variables like `` style="`--rotation: ${rotation}deg`" `` for every dynamic rule, this library abstracts that into a directive.

this looks like `` v-css:rotation="`${rotation}deg`" ``, this can be repeated for every dynamic css variable your heart desires.

now that i've explained it this whole library seems much less magical :sob:

## get started lmao

okay first do `npm i vue-stylist`

next you wanna do the following somewhere

-   for vue-cli it could be in the entry point of your app
-   for nuxt it could be in `/plugins` and referenced in `nuxt.config.js`

```ts
import Vue from "vue";
import VueStylist from "vue-stylist";

Vue.use(VueStylist, {
    directive: "css", // this defaults to "css" (no need to add it), setting it let's you change the directive name
});
```

## what can this do lmao

the way the directive works is as follows:

### setting a single css variable:

```html
<h1 v-css:background="vueVariable">Hello World</h1>

<!--
    results in `--background: ${vueVariable};`
-->
```

### setting a lot of css vars with an object:

(objects can take camelcase or kebab-case keys)

```html
<h1
    v-css="{
    'test-variable': '42deg',
    primaryColor: vueVariable
}"
>
    Hello World
</h1>

<!--
    results in `--test-variable: 42deg; --primary-color: ${vueVariable};`
-->
```

### setting a css property

this can be pretty useful when you don't need to setup too much and just wanna set a style rule.

however the syntax is a bit lengthier as this feature isn't the intended purpose of the library.

quick note: this isn't supported for objects because at that point literally just use [the style attribute lol](https://vuejs.org/v2/guide/class-and-style.html#Object-Syntax-1).

```html
<h1
    v-css:color.rule="coolDynamicColor"
>
    Hello World
</h1>

<!--
    results in `color: ${coolDynamicColor};`
-->
```

## enjoy lmao

leave star
