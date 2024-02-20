<script lang="ts">
  import Apple1Jpg from '$lib/assets/apple.jpg'
  import Apple2Jpg from '$lib/assets/蘋果.jpg'
  import Apple3Jpg from '$lib/assets/りんご.jpg'
  import EnhancedApple1Jpg from '$lib/assets/apple.jpg?enhanced'
  import EnhancedApple2Jpg from '$lib/assets/蘋果.jpg?enhanced'
  import EnhancedApple3Jpg from '$lib/assets/りんご.jpg?enhanced'
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<ol>
  <li>
    <p>{'<img src="/apple.jpg" />'}</p>
    <img src="/apple.jpg" alt="img[src=/apple.jpg]" />
  </li>
  <li>
    <p>{'<img src="/蘋果.jpg" />'}</p>
    <img src="/蘋果.jpg" alt="img[src=/蘋果.jpg]" />
  </li>
  <li>
    <p>{'<img src="/りんご.jpg" />'}</p>
    <img src="/りんご.jpg" alt="img[src=/りんご.jpg]" />
  </li>
  <li>
    <p>{'<img src={import("$lib/assets/apple.jpg")} />'}</p>
    <img src={Apple1Jpg} alt="img[src=import('apple.jpg')]" />
  </li>
  <li>
    <p>{'<img src={import("$lib/assets/蘋果.jpg")} />'}</p>
    <img src={Apple2Jpg} alt="img[src=import('蘋果.jpg')]" />
  </li>
  <li>
    <p>{'<img src={import("$lib/assets/りんご.jpg")} />'}</p>
    <img src={Apple3Jpg} alt="img[src=import('りんご.jpg')]" />
  </li>
  <li>
    <p>{'<enhanced:img src={import("$lib/assets/apple.jpg?enhanced")} />'}</p>
    <enhanced:img
      src={EnhancedApple1Jpg}
      alt="enhanced:img[src=import('$lib/assets/apple.jpg?enhanced')]"
    />
  </li>
  <li>
    <p>{'<enhanced:img src={import("$lib/assets/蘋果.jpg?enhanced")} />'}</p>
    <enhanced:img
      src={EnhancedApple2Jpg}
      alt="enhanced:img[src=import('$lib/assets/蘋果.jpg?enhanced')]"
    />
  </li>
  <li>
    <p>{'<enhanced:img src={import("$lib/assets/りんご.jpg?enhanced")} />'}</p>
    <enhanced:img
      src={EnhancedApple3Jpg}
      alt="enhanced:img[src=import('$lib/assets/りんご.jpg?enhanced')]"
    />
  </li>
</ol>

<style>
  p {
    font-family: monospace;
  }
  img {
    width: auto;
    height: 100px;
    border: solid 2px black;
  }
</style>
