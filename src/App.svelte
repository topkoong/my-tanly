<script lang="ts">
  import Navbar from './lib/components/Navbar.svelte';
  import About from './lib/components/About.svelte';
  import Facts from './lib/components/Facts.svelte';
  import { Router, Route } from 'svelte-routing';
  import Home from './lib/components/Home.svelte';
  import Moments from './lib/components/Moments.svelte';
  export let url = '';
</script>

<Router {url}>
  <Navbar />
  <section>
    <Route path="/" component={Home} />
    <Route path="about" component={About} />
    <Route path="facts" component={Facts} />
    <Route path="moments" component={Moments} />
  </section>
</Router>
