import React from "react";
import Cards from "./Cards";
import Skills from "./Skills";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="flex-col flex py-12 md:space-y-24 space-y-6">
      <div className="text-[#94a3b8] md:text-xl text-base flex flex-col space-y-5 py-10">
        <div className="w-full">
          Hello, this is Mert, I am an
          <span className="text-slate-200">
            {" "}
            industrial engineering student
          </span>
          . I have been working on{" "}
          <span className="text-slate-200">Frontend</span>.
        </div>
        <div>
          {" "}
          I was born in <span className="text-slate-200">Turkey</span>, Samsun
          in 2002. When I was 16, my family and I moved to Trabzon. I have been
          living in Ankara for university about 2 years.
        </div>
        <div>
          {" "}
          In my free time, I enjoy watching football, basketball, doing fitness,
          and reading books. If you would like to learn more about me or my
          work,
          <span className="text-slate-200">
            {" "}
            please feel free to contact me.
          </span>
        </div>
      </div>
      <div className="md:space-y-24 space-y-12 flex flex-col">
        <h2
          id="SKILLS"
          className="pl-3 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only py-5"
        >
          Skills
        </h2>
        <Skills />
        <h2 className="text-sm pl-3 font-bold uppercase tracking-widest text-slate-200 lg:sr-only pt-12">
          Projects
        </h2>
        <div className="space-y-5 group">
          <Cards
            header="Instagram Clone"
            image="instagram.png"
            content="As a frontend developer, I proudly present my Instagram clone project. Meticulously crafted with a contemporary user interface and interactive elements. This project showcases my frontend skills, delivering an engaging social experience through visual shares, likes, and comments. Join me in exploring the world of my project with its user-friendly and captivating interface."
            lang="Framer Motion"
            lang1="Tailwind Css"
            lang2="Nextjs"
            link="https://instagramclone-kjrx.vercel.app/"
          />
          <Cards
            header="Genius Clone"
            image="genius.png"
            content="As a frontend developer, I'm thrilled to present my rendition of the Genius Music App. I've transformed an existing concept into a fully functional frontend masterpiece. Seamlessly weaving together lyrics and annotations, I've created an immersive user interface that resonates. Join me in exploring the harmonious fusion of my frontend expertise and musical passion."
            lang="Genius Api"
            lang1="Tailwind Css"
            lang2="Nextjs"
            link="https://genius-app.vercel.app/"
          />
          <Cards
            header="Landing Page"
            image="landingpage.png"
            content="Excited to share my take on a captivating landing page design sourced from Dribbble. This conceptual masterpiece blends aesthetics and functionality seamlessly. Through meticulous frontend craftsmanship, I've brought this vision to life. Explore the convergence of design and technology on this immersive landing page."
            lang="html"
            lang1="Css"
            lang2="Tailwind Css"
          />
          <Cards
            content="I've integrated a groundbreaking feature in my custom ChatGPT project the ability to convert text into speech. Elevating user interaction, this innovation lets text inputs come alive through vocal responses. Experience the seamless transition from text-based to auditory communication, adding a new dimension to my project. Explore the power of text-to-speech transformation."
            header="Chat gpt with speech"
            image="Chat.png"
            lang="Whisper and OpenAI Api"
            lang1="Tailwind Css"
            lang2="Nextjs"
          />
          <Cards
            content="Introducing the Rick and Morty Search Engine, a project close to my heart. I've crafted a unique platform that allows fans to explore the vast universe of Rick and Morty effortlessly. With intuitive search functionality and curated content, users can dive deep into episodes, characters, and references. Join me in navigating the multiverse of entertainment"
            header="Rick and Morty Search App"
            image="Rick.png"
            lang="Rick and Morty Api"
            lang1="Sass"
            lang2="React"
          />
          <Cards
            content="Presenting my meticulously designed Todo app, where organization meets simplicity. Seamlessly manage tasks, prioritize activities, and track progress with an intuitive interface. Through thoughtful frontend development, I've brought efficiency to your daily routine. Experience the power of streamlined task management and embark on a journey of productivity"
            header="Todo app"
            image="todo.png"
            lang="Tailwind Css"
            lang1="React"
            lang2="Astrojs"
          />
          <Cards
            content="Discover the Weather App – a digital window to the world's forecast. Through meticulous frontend development, I've transformed complex data into a user-friendly interface. Seamlessly access real-time weather updates, forecasts, and more. Whether at home or abroad, this app ensures you're prepared for any climate. Explore meteorological insights and stay weather-wise."
            header="Wheater App"
            image="wheather.webp"
            lang="Accuaweather Api"
            lang1="Tailwind Css"
            lang2="Nextjs"
          />
          <Cards
            content="Introducing my Blog App, where creativity finds a digital canvas. With meticulous frontend development, I've crafted an engaging platform for sharing thoughts and stories. Seamlessly compose, publish, and interact with content in a user-friendly interface. Join me in creating a virtual space that fosters meaningful connections through the art of blogging."
            header="Blog App"
            image="blog.png"
            lang="Tailwind Css"
            lang1="Astrojs"
            lang2="Nextjs"
          />
          <Cards
            content="Experience the classic game reimagined in my Rock Paper Scissors App. Through seamless frontend design, I've brought this timeless game to your fingertips. Engage in battles of strategy with a modern twist, enjoying the intuitive user interface. Challenge friends or test your luck against the computer. Dive into a world of interactive fun, mastering the age-old game."
            header="Rock Paper Scissors app"
            image="yeah.jpg"
            lang="Html"
            lang1="Css"
            lang2="Vanilla Javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
