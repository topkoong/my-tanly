<script lang="ts">
  import { Link } from 'svelte-routing';
</script>

<nav
  class="mx-6 lg:mx-20 bg-dark-purple border-2 border-bright-red px-2 sm:px-4 py-2.5 rounded-full"
>
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="/" class="flex items-center">
      <span
        class="self-center uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold whitespace-nowrap text-bright-red"
        >Tanly</span
      >
    </Link>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-bright-red rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        /></svg
      >
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
      >
        <li>
          <Link
            to="/"
            class="block py-2 pr-4 pl-3 rounded text-bright-red text-2xl uppercase font-bold md:p-0"
            aria-current="page">Home</Link
          >
        </li>
        <li>
          <Link
            to="about"
            class="block py-2 pr-4 pl-3 text-bright-red rounded md:border-0 text-bright-red text-2xl uppercase font-bold md:p-0"
            >About</Link
          >
        </li>
        <li>
          <Link
            to="facts"
            class="block py-2 pr-4 pl-3 text-bright-red rounded md:border-0 text-bright-red text-2xl uppercase font-bold md:p-0"
            >Facts</Link
          >
        </li>
        <li>
          <Link
            to="moments"
            class="block py-2 pr-4 pl-3 text-bright-red rounded md:border-0 text-bright-red text-2xl uppercase font-bold md:p-0"
            >Moments</Link
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
