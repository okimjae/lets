import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task'

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

const Container = styled.div` 
    margin: 8px;
    border-radius: 8px;
    width: 220px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    background-color: #f4f5f7;
`
const Title = styled.text`
    padding: 8px;
    background-color: #f4f5f7;
    color: #5e6c84;
    margin: 0;
`

const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
    flex-grow: 1;
    min-height: 100px;
    background-color: #f4f5f7;
`