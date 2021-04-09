import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import initialData from '../../initial-data';
import Column from '../Column'

function DnD() {
  const [data, setData] = useState(initialData)
  const [homeIndex, setHomeIndex] = useState(null)


  const onDragStart = start => {
    document.body.style.color = 'orange'
    document.body.style.transition = 'background-color 0.2s ease'

    setHomeIndex(data.columnOrder.indexOf(start.source.droppableId))

  }

  const onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(data.tasks).length
      : 0
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }

  const onDragEnd = result => {
    document.body.style.color = 'inherit'
    document.body.style.backgroundColor = 'inherit'

    setHomeIndex(null)

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTasksIds = Array.from(start.tasksIds)
      newTasksIds.splice(source.index, 1)
      newTasksIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        tasksIds: newTasksIds
      }

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      }

      setData(newData)
      return
    }

    //Moving from one list to another
    const startTaskIds = Array.from(start.tasksIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tasksIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.tasksIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tasksIds: finishTaskIds,
    }

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    }

    setData(newData);
    return

  }

  return (
    <Div>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Container>
          {
            data.columnOrder.map((columnId, index) => {
              const column = data.columns[columnId]
              const tasks = column.tasksIds.map(taskId => data.tasks[taskId])

              const isDropDisabled = index < homeIndex

              return <Column key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled} />
            })
          }
        </Container>
      </DragDropContext>
    </Div>
  );
}

export default DnD;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-wrap: wrap;
`

const Div = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`