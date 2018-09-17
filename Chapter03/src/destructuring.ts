namespace Destructuring {
    interface MyObject {
        id: number;
        time: number;
        name: string;
        startTime: Date;
        stopTime: Date;
        category: string;
    }
    const obj: MyObject = {
        id: 1,
        time: 100,
        name: "MyName",
        startTime: new Date(),
        stopTime: new Date(),
        category: "Cat5"
    };
    // const id = obj.id;
    // const name = obj.name;
    // const category = obj.category;

    // console.log(id); // prints 1
    // console.log(name); // prints MyName
    // console.log(category); // prints Cat5

    const { id, name, category, ...remainingMembers } = obj;
    console.log(remainingMembers.startTime); // prints System date
    console.log(remainingMembers.stopTime); // prints System date
    console.log(remainingMembers.time); // prints 100

    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [value1, value2, ...value3To9] = values;
    const [value_1, , value_3, ...value4To9] = values;

    console.log(value1); // prints 1
    console.log(value2); // prints 2
    console.log(value3To9); // prints [ 3, 4, 5, 6, 7, 8, 9 ]
    console.log(value_1); // prints 1
    console.log(value_3); // prints 3
    console.log(value4To9); // prints [ 4, 5, 6, 7, 8, 9 ]
    


}
