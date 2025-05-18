import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex flex-col gap-16 md:flex-row md:gap-20 overflow-hidden h-[100dvh] justify-center items-center pb-[92px]">
      <section className="flex flex-col gap-8 justify-center items-center md:items-start">
        <div className="flex flex-col gap-3 justify-center items-center md:items-start">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-5xl font-bebas text-white xl:text-8xl text-center"
          >
            Hola, soy Ricardo Gonzalez.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="text-subtext font-manrope lg:text-lg w-9/12 text-center md:text-left"
          >
            Docente Front-End y de videojuegos en Play Code Latam. Desarrollador
            Full Stack en Novigo Technology. Apasionado por crear sitios web
            accesibles y fáciles de usar.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <a
            href="#contact"
            className="font-manrope flex items-center font-bold bg-primary border-2 border-primary hover:bg-transparent hover:text-white duration-200 rounded-full p-1 px-4 gap-3 text-sm"
          >
            <p>CONTACTAME</p>
          </a>

          <a
            href="https://www.linkedin.com/in/ricardoagustingonzalez/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#222222] rounded-full hover:bg-transparent border-2 border-[#222222] hover:border-primary duration-200 ease-in-out"
          >
            <img src="/in.svg" alt="" />
          </a>
          <a
            href="https://github.com/AgustinGonzalez1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-[#222222] rounded-full hover:bg-transparent border-2 border-[#222222] hover:border-primary duration-200 ease-in-out"
          >
            <img src="/github.svg" alt="" />
          </a>
        </motion.div>
      </section>
      <section className="mx-auto max-w-80 sm:max-w-[400px] md:max-w-[600px] flex justify-center items-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          viewport={{ once: true }}
          src="/profile.png"
          alt=""
        />
      </section>
    </header>
  );
}
