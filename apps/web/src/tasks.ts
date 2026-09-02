import { createServerFn } from '@tanstack/react-start'
import { env } from 'cloudflare:workers'

export type Task = {
  id: number
  title: string
  completed: boolean
  createdAt: string
}

type TaskRow = {
  id: number
  title: string
  completed: number
  created_at: string
}

type TaskIdInput = { id: number }
type CreateTaskInput = { title: string }
type UpdateTaskInput = { id: number; title: string }
type ToggleTaskInput = { id: number; completed: boolean }

const toTask = (row: TaskRow): Task => ({
  id: row.id,
  title: row.title,
  completed: row.completed === 1,
  createdAt: row.created_at,
})

function requireTaskId(value: unknown): TaskIdInput {
  if (
    typeof value !== 'object' ||
    value === null ||
    !Number.isInteger((value as TaskIdInput).id) ||
    (value as TaskIdInput).id < 1
  ) {
    throw new Error('Task id must be a positive integer.')
  }

  return value as TaskIdInput
}

function requireTitle(value: unknown): CreateTaskInput {
  if (typeof value !== 'object' || value === null || typeof (value as CreateTaskInput).title !== 'string') {
    throw new Error('A task title is required.')
  }

  const title = (value as CreateTaskInput).title.trim()
  if (title.length === 0 || title.length > 120) {
    throw new Error('Task titles must be between 1 and 120 characters.')
  }

  return { title }
}

function requireUpdate(value: unknown): UpdateTaskInput {
  const { id } = requireTaskId(value)
  const { title } = requireTitle(value)
  return { id, title }
}

function requireToggle(value: unknown): ToggleTaskInput {
  const { id } = requireTaskId(value)
  if (typeof (value as ToggleTaskInput).completed !== 'boolean') {
    throw new Error('Task completion must be true or false.')
  }

  return { id, completed: (value as ToggleTaskInput).completed }
}

export const listTasks = createServerFn({ method: 'GET' }).handler(async () => {
  const { results } = await env.DB.prepare(
    'SELECT id, title, completed, created_at FROM tasks ORDER BY created_at DESC, id DESC',
  ).all<TaskRow>()

  return results.map(toTask)
})

export const createTask = createServerFn({ method: 'POST' })
  .validator(requireTitle)
  .handler(async ({ data }) => {
    await env.DB.prepare('INSERT INTO tasks (title) VALUES (?)').bind(data.title).run()
  })

export const updateTask = createServerFn({ method: 'POST' })
  .validator(requireUpdate)
  .handler(async ({ data }) => {
    await env.DB.prepare('UPDATE tasks SET title = ? WHERE id = ?').bind(data.title, data.id).run()
  })

export const toggleTask = createServerFn({ method: 'POST' })
  .validator(requireToggle)
  .handler(async ({ data }) => {
    await env.DB.prepare('UPDATE tasks SET completed = ? WHERE id = ?')
      .bind(data.completed ? 1 : 0, data.id)
      .run()
  })

export const deleteTask = createServerFn({ method: 'POST' })
  .validator(requireTaskId)
  .handler(async ({ data }) => {
    await env.DB.prepare('DELETE FROM tasks WHERE id = ?').bind(data.id).run()
  })
