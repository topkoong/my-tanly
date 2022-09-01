<script lang="ts">
  import About from '@components/About.svelte';
  import Facts from '@components/Facts.svelte';
  import Home from '@components/Home.svelte';
  import Moments from '@components/Moments.svelte';
  import Navbar from '@components/Navbar.svelte';
  import { Route, Router } from 'svelte-routing';
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
