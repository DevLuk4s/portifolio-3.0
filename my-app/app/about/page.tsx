"use client";

import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
      >
        Sobre mim
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">Sou Lucas, desenvolvedor frontend com 22 anos, focado em criar interfaces web dinâmicas e intuitivas. Trabalho com JavaScript, TypeScript, React.js, Next.js e Tailwind CSS, com conhecimentos em Node.js, Express e MongoDB. Busco sempre evoluir e contribuir para projetos desafiadores e inovadores.</p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Habilidades
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Front-End</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Back-End</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ferramentas</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experiences Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experiências
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Desenvolvedor Front-End (Projetos e Estudos)
            </h3>
            <p className="text-primary mb-2">2023 - Presente</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Desenvolvimento de aplicações web responsivas com React e
                Next.js
              </li>
              <li>Criação de interfaces modernas utilizando Tailwind CSS</li>
              <li>Consumo de APIs e gerenciamento de estado</li>
              <li>Versionamento de código com Git e GitHub</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Education
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            <h3 className="text-xl font-semibold mb-2">
              Tecnólogo em Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-primary mb-2">
              Estacio - 2025 - 2027 - Andamento
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Desenvolvimento de sistemas com foco em lógica de programação,
                bancos de dados e aplicações web
              </li>
              <li>
                Programação em JavaScript, TypeScript e fundamentos de back-end
              </li>
              <li>
                Modelagem de sistemas, análise de requisitos e boas práticas de
                desenvolvimento
              </li>
              <li>
                Trabalho com metodologias ágeis e versionamento de código (Git)
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
