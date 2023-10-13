<template>
  <nav>
    <router-link to="/main">main</router-link> |
    <router-link to="/about">About</router-link>

  </nav>
  <router-view/>
</template>


<style>
/* reset */
* {
  margin: 0;
  padding: 0;
}
li {list-style: none;}
a {color: inherit;text-decoration: none;}
img {display: block;}
button {border: none; outline: none;background-color: inherit;}
</style>
