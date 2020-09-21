import React from 'react'
import ProfileLayout from '../components/ProfileLayout'
import Handle404 from '../components/HOCs/Handle404'
import TodoPage from '../components/TodoPage'

const Todo = () => {
	return (
		<>
			<ProfileLayout>
				<TodoPage />
			</ProfileLayout>
		</>
	)
}

export default () => Handle404(Todo, 'todo')
