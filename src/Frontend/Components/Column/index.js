import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task'
import { Container, Title, TaskList} from './styles';

function Column({ column, tasks, isDropDisabled }) {
    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable
                droppableId={column.id}
                // type={column.id === 'column-3' ? 'done' : 'active'}
                isDropDisabled={isDropDisabled}
            >
                {
                    (provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </TaskList>
                    )
                }
            </Droppable>
        </Container>
    )
}

export default Column;

