<script>
    export let y = 0; // Ensure `y` has a default value.
  
    let tabs = [
      { name: 'Projects', link: '#projects' },
      { name: 'About me', link: '#about' },
      { name: 'Blog', link: '#blog' }, // Fixed link for Blog.
    ];
  </script>
  
  <header
    class="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid"
    class:py-4={y > 0}
    class:bg-slate-950={y > 0}
    class:border-violet-950={y > 0}
    class:py-6={!y > 0}
    class:bg-transparent={!y > 0}
    class:border-transparent={!y > 0}
  >
    <h1 class="font-medium">
      <b class="font-bold poppins">Williams</b> Anetor
    </h1>
  
    <div class="hidden ml-auto pr-4 sm:flex items-center gap-4">
      {#each tabs as tab, index}
        <a href="{tab.link}" class="text-white hover:text-violet-500 duration-200">
          <p>{tab.name}</p>
        </a>
      {/each}
    </div>
  
    <a
      href="https://cal.com/"
      target="_blank"
      aria-label="Get in touch"
      class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950 focus:outline-none"
    >
      <div
        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200 ease-in"
      ></div>
      <h4 class="relative z-10">let's talk</h4>
    </a>
  </header>
  