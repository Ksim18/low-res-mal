# My Project Backend

MyAnimeList on minimal resolution, has three entities, supports CRUD operations between them, and a request to actual
MAL api.

- Framework: Fastify
- Compiler: TypeScript
- Database: postgreSQL

![Diagram](./diagram.jpg?raw=true "Diagram")

Fastify в качестве фреймворка был выбран из-за его простоты, высокой производительности(что является мотивацией в нём
разобратся), и хорошей совместимостью с TypeScript, который я выбрал компилятором, поскольку типизация значительно
упрощает разработку, а именно: дебагинг. PostgreSQL я выбрал из-за её популярности, и моего предидущего, вполне
приятного опыта с этой системой управленияя базами данных.