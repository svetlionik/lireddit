import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Book {
  @PrimaryKey()
  id!: number; // string is also supported

  @Property()
  title!: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
