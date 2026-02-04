import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

function About() {
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      {/* Bio Section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo in
          eos dolores voluptatibus ea reprehenderit voluptatem inventore quae,
          nihil assumenda?
        </p>
      </section>
      {/*Skills Section*/}
      <section className="mb-16">
        <h2 className="section-title">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Front-End</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Back-End</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Front-End</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </section>
      {/* expriences section */}
      <section className="mb-16">
        <h2 className="section-title">Experiences</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
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
          </div>
        </div>
      </section>
      {/*Education section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
