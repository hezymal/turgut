import { Column, Entity, ObjectIdColumn, ObjectId } from "typeorm";

@Entity()
export class Examination {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column()
    title: string;

    @Column()
    description: string;
}
