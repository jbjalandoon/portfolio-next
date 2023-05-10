import Content from "../Content";
import Project from "../Project";

export default function Projects() {
  return (
    <Content id='project' title='Some of my works'>
      <div className="grid grid-cols-3 gap-7">
        <Project
          title='My Portfolio'
          description='Dolor cillum laboris duis adipisicing laborum est. In cillum quis in esse occaecat ea excepteur aliquip reprehenderit velit eiusmod culpa. Exercitation incididunt ea do mollit veniam velit minim do laborum. Laborum excepteur laboris irure laborum exercitation. Tempor nisi commodo exercitation deserunt ullamco ad mollit.'
          technologies={["NextJS", "Prisma", "Tailwind", "React"]}
          link='#link'
          github='#link'
        />
        <Project
          title='My Portfolio'
          description='Dolor cillum laboris duis adipisicing laborum est. In cillum quis in esse occaecat ea excepteur aliquip reprehenderit velit eiusmod culpa. Exercitation incididunt ea do mollit veniam velit minim do laborum. Laborum excepteur laboris irure laborum exercitation. Tempor nisi commodo exercitation deserunt ullamco ad mollit.'
          technologies={["NextJS", "Prisma", "Tailwind", "React"]}
          link='#link'
          github='#link'
        />
        <Project
          title='My Portfolio'
          description='Dolor cillum laboris duis adipisicing laborum est. In cillum quis in esse occaecat ea excepteur aliquip reprehenderit velit eiusmod culpa. Exercitation incididunt ea do mollit veniam velit minim do laborum. Laborum excepteur laboris irure laborum exercitation. Tempor nisi commodo exercitation deserunt ullamco ad mollit.'
          technologies={["NextJS", "Prisma", "Tailwind", "React"]}
          link='#link'
          github='#link'
        />
      </div>
    </Content>
  );
}
