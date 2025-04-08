interface TodosType {
               title: string;
               description: string;
               done: boolean;
}

interface TodosInput {
               todo: TodosType;
}

function Todos({ todo }: TodosInput) {
               return (
                              <>
                                             <h1>{todo.title}</h1>
                                             <h1>{todo.description}</h1>
                              </>
               );
}

export default Todos;
