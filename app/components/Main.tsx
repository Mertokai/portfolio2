import React from "react";
import Cards from "./Cards";
import Skills from "./Skills";
import Resume from "./Resume";

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="flex-col flex py-24 md:space-y-24 space-y-6">
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
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            lang="Framer Motion"
            lang1="Tailwind Css"
            lang2="Nextjs"
            link="https://instagramclone-kjrx.vercel.app/"
          />
          <Cards
            header="Genius Clone"
            image="genius.png"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            lang="Genius Api"
            lang1="Tailwind Css"
            lang2="Nextjs"
            link="https://genius-app.vercel.app/"
          />
          <Cards
            header="Landing Page"
            image="landingpage.png"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            lang="html"
            lang1="Css"
            lang2="Tailwind Css"
          />
          <Cards
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            header="Chat gpt with speech"
            image="Chat.png"
            lang="Genius Api"
            lang1="Tailwind Css"
            lang2="Nextjs"
          />
          <Cards
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            header="Rick and Morty Search App"
            image="Rick.png"
            lang="Rick and Morty Api"
            lang1="Sass"
            lang2="React"
          />
          <Cards
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            header="Todo app"
            image="todo.png"
            lang="Tailwind Css"
            lang1="React"
            lang2="Astrojs"
          />
          <Cards
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            header="Wheater APp"
            image="wh.jpg"
            lang="Accuaweather Api"
            lang1="Tailwind Css"
            lang2="Nextjs"
          />
          <Cards
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
            header="Blog App"
            image="blog.png"
            lang="Tailwind Css"
            lang1="Astrojs"
            lang2="Nextjs"
          />
          <Cards
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,g"
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
