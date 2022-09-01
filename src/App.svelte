<script lang="ts">
  import About from '@lib/components/About.svelte';
  import Facts from '@lib/components/Facts.svelte';
  import Home from '@lib/components/Home.svelte';
  import Moments from '@lib/components/Moments.svelte';
  import Navbar from '@lib/components/Navbar.svelte';
  import { Route,Router } from 'svelte-routing';
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
