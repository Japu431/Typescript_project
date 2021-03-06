import { Entity, Column, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @UpdateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    contructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }

}

export { User };
