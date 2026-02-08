---
title: 'Loxia - Your Database, fluent in Dart'
sidebar: false
editLink: false
search: false
head:
    - - meta
      - property: 'og:title'
        content: 'Loxia - Your Database, fluent in Dart'

    - - meta
      - name: 'description'
        content: 'Learn how Loxia can help you manage your Dart databases efficiently.'

    - - meta
      - property: 'og:description'
        content: 'Learn how Loxia can help you manage your Dart databases efficiently.'
    - - meta
      - property: 'og:image'
        content: https://avesbox.com/blog/loxia_presentation/loxia_presentation.png

    - - meta
      - property: 'twitter:image'
        content: https://avesbox.com/blog/loxia_presentation/loxia_presentation.png
---
<script setup>
	import BlogPage from '../components/blog_page.vue'
</script>

<BlogPage
	title="Loxia - Your Database, fluent in Dart"
	src="/blog/loxia_presentation/loxia_presentation.png"
	alt="Loxia - Your Database, fluent in Dart"
	author="Francesco Vallone"
	date="08 Feb 2026"
	shadow
	brand="loxia"
>

Today, we are thrilled to unveil Loxia, a lightweight and flexible Object-Relational Mapping (ORM) library for Dart. Loxia is designed to simplify database interactions and management of data models, providing a seamless experience for developers working with relational data in their Dart applications.

## Why Loxia?

When Avesbox started, we wanted to create tools that empower developers to build better applications. Loxia is another step in that direction. It offers a clean and intuitive API for defining data models, managing database schemas, and performing CRUD operations with ease.

Loxia is built with a focus on:

- **Simplicity**: Loxia abstracts away the complexities of database interactions, allowing you to focus on your application logic.
- **Flexibility**: Whether you're working with SQLite, PostgreSQL, or MySQL, Loxia provides a consistent API that adapts to your chosen database engine.
- **Type Safety**: Loxia leverages Dart's type system to ensure that your data models are well-defined and that your database interactions are safe and predictable.
- **Migrations**: Loxia includes a powerful migration system that helps you evolve your database schema over time without losing data.

## Getting Started

To get started with Loxia, simply add it to your `pubspec.yaml`:

```yaml
dependencies:
  loxia: ^1.0.0
```

Then, you can define your data models using Loxia's annotations:

```dart
import 'package:loxia/loxia.dart';
part 'user.g.dart';

@EntityMeta()
class User extends Entity {
  @PrimaryKey()
  final int id;

  @Column()
  final String name;

  @Column()
  final String email;

  User(this.id, this.name, this.email);

  static EntityDescriptor<User, UserPartial> get entity => 
    $UserEntityDescriptor;
}
```

Let's execute `build_runner` to generate the necessary code:

```bash
dart run build_runner build
```

The necessary code will be generated. Let's now add it to the datasource and perform some operations:

```dart
import 'package:loxia/loxia.dart';

Future<void> main() async {
  final ds = DataSource(
    SqliteDataSourceOptions(
      path: 'example.db',
      entities: [User.entity],
    ),
  );
  await ds.init();
  final users = ds.getRepository<User>();
  await users.insert(
    UserInstertDto(name: 'Francesco', email: 'francesco@example.com')
  );
  await ds.dispose();
}
```

Now you can run your application, and Loxia will handle the database interactions for you! Explore the documentation for more advanced features like migrations, relationships, and custom queries [here](https://loxia.avesbox.com/).

## Join the Loxia Journey

Loxia is still in its early stages, and we are excited to continue developing it with the help of the community. We welcome contributions, feedback, and suggestions to make Loxia the best ORM for Dart developers. If you're interested in contributing, please check out our [GitHub repository](https://github.com/avesbox/loxia) and join the discussion!

## Social

If you want to stay updated on the project, you can follow Avesbox on [X](https://x.com/avesboxx) and [GitHub](https://github.com/avesbox).

Stay tuned for more updates and releases! 🐤

</BlogPage>
