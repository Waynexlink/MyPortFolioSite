<script>
    
    import Step from "./Step.svelte";
    
    import { onMount } from 'svelte';
  import 'aos/dist/aos.css';

  let AOS;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const module = await import('aos');
      AOS = module.default;
      AOS.init({
        duration: 1200,
        once: true,
      });
    }
  });

    
    let steps = [
      { name: 'Weather App', icon: "fa-solid fa-cloud", href:"https://github.com/Waynexlink/Weather-Api"},
      { name: 'Ultimate Todo', icon: "fa-solid fa-book",href:"https://github.com/Waynexlink/Todo-App" },
      { name: 'Waifu API', icon: "fa-solid fa-child-dress", href:"https://github.com/Waynexlink/Waifu_API"}
    ];
    let benefits = [
        {
            metric: "10x",
            name: "a self taught developer",
            description:
                "I taught myself to code using free online resources and fell in love with the creativity and problem-solving involved. As a computer science student, I am passionate about developing and engineering innovative online experiences. I started with JavaScript, HTML, and CSS, and have since expanded my knowledge to include JavaScript frameworks, backend programming, design, cloud services, and much more.",
        },
        {
            name: "creative developer & growth strategist",
            description:
                "While I’m a developer at heart, I also have significant experience in helping businesses scale through strategies like email marketing, payment integrations, and more. I combine technical expertise with marketing know-how to deliver impactful solutions that drive growth.",
        },
        {
            name: "an excellent communicator",
            description:
                "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team.",
        },
    ];
  </script>
  

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h1  data-aos="fade-left" data-aos-delay="300"class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Williams</span> Anetor<br />
        Full Stack <span class="poppins text-violet-400">Developer</span>
      </h1>
      <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="700" class="text-base sm:text-lg md:text-xl">
        That means I can create both the <span class="font-semibold text-violet-400">front-end</span> (design) and <span class="font-semibold text-violet-400">back-end</span> (functionality) of your site using 
        <span class="font-semibold text-violet-400">JavaScript</span> 
        (<span class="font-semibold">SvelteKit</span>), 
        <span class="font-semibold text-violet-400">TailwindCSS</span>, 
        <span class="font-semibold text-violet-400">Node.js + Express</span>, 
        <span class="font-semibold text-violet-400">Firebase/Supabase</span>, 
        and <span class="font-semibold text-violet-400">Stripe</span>.
      </p>
      <a data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="700"class="blueShadow mx-auto lg:mr:auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer "
      href="https://youtu.be/dQw4w9WgXcQ?feature=shared"
        target="_blank">
        
        <div
        class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200 ease-in"
      ></div>
      <h4 class="relative z-9">Get in Touch &rarr;</h4>
      </a>
    </div>
    <div data-aos="fade-up" data-aos-delay="500" class="relative shadow 2xl grid place-items-center">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src={'images/computer.gif'} alt="Profile-Image" class='object-cover z-[2] max-h-[70vh] rounded-3xl'>
    </div>
  </section>
  <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-lg sm:text-xl md:text-2xl">
        A few of my creations.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my works
      </h3>
    </div>
    
    <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
      <i class="fa-regular fa-circle-play"></i>
      <p>Watch the video</p>
    </a>
  
    <div  data-aos="fade-right" data-aos-delay="300"class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 ">
      <Step step={steps[0]}>
        
        <p>A sleek, user-friendly weather app that lets you search for and view real-time weather updates for any city. Built with <strong class="text-violet-400">Node.js, Express, and MongoDB</strong> , it features a modern UI for an engaging user experience.</p>
      </Step>
      <Step step={steps[1]}>
        <p>A robust CRUD application designed for efficient task management. Built with Node.js, Express, and MongoDB, it allows users to <strong class="text-violet-400">create, read, update, and delete</strong> tasks effortlessly. The sleek and intuitive UI ensures a smooth and engaging experience.</p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Waifu API is a full-stack application featuring a <strong class="text-violet-400">CRUD operation API built with Node.js and Express</strong>. It uses MongoDB as its database and custom CSS for the frontend. It supports creating, deleting, editing, and posting, making it ideal for app development.
        </p>
      </Step>
      
    </div>
  </section>
  
  <section id="about"
  class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
  <div
  class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
      <h6 class="text-large sm:text-xl md:text-2xl">
      Want to know more?
       </h6>
        <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
            A bit <span class="poppins text-violet-400">about</span> me.
       </h3>
    </div>
     <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
     </p>
     <div class="flex flex-col gap-20 w-full mx-auto max-w-800px">
        {#each benefits as benefits, index}
            <div  data-aos="fade-right"
            data-aos-delay={index * 100} class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index + 1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">{benefits.name}</h3>
                    <p>{benefits.description}</p>
                </div>
            </div>
        {/each}
        
     </div>
     
     <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
        The <span class="text-violet-400">Complete</span> Package
    </h5>
    <div data-aos="fade-up" data-aos-delay="300" class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full">
        <table class="bg-white text-slate-700 rounded text-center">
          <thead class="border-b border-solid border-slate-200">
            <tr>
              <th></th> <!-- Empty header for the first column -->
              <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
              <th class="bg-violet-700 text-white whitespace-nowrap p-4 px-8">Me</th>
              <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
              <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-solid border-slate-200">
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td>
              <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
              <td><i class="fa-solid fa-check text-green-500"></i></td>
              <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
              <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            </tr>
            <tr class="border-b border-solid border-slate-200">
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical Thought</td>
              <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
              <td><i class="fa-solid fa-check text-green-500"></i></td>
              <td><i class="fa-solid fa-check text-slate-500"></i></td>
              <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            </tr>
            <tr class="border-b border-solid border-slate-200">
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td>
              <td><i class="fa-solid fa-check text-slate-500"></i></td>
              <td><i class="fa-solid fa-check text-green-500"></i></td>
              <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
              <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
            </tr>
            <tr class="border-t border-solid border-slate-200">
              <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Programming Ability</td>
              <td><i class="fa-solid fa-check text-slate-500"></i></td>
              <td><i class="fa-solid fa-check text-green-500"></i></td>
              <td><i class="fa-solid fa-check text-slate-500"></i></td>
              <td><i class="fa-solid fa-check text-slate-500"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
        <p>Scroll to see more result &rarr;</p>
      </div>
      



</section>
  
  
</main>
